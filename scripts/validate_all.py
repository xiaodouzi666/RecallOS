#!/usr/bin/env python3
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))


def run_json(args: list[str], cwd: Path = ROOT) -> Any:
    completed = subprocess.run(
        args,
        cwd=str(cwd),
        check=True,
        text=True,
        capture_output=True,
    )
    return json.loads(completed.stdout)


def run_text(args: list[str], cwd: Path = ROOT) -> str:
    completed = subprocess.run(
        args,
        cwd=str(cwd),
        check=True,
        text=True,
        capture_output=True,
    )
    return completed.stdout


def assert_equal(actual: Any, expected: Any, label: str) -> None:
    if actual != expected:
        raise AssertionError(f"{label}: expected {expected!r}, got {actual!r}")


def main() -> None:
    python = sys.executable

    seed_output = run_text([python, "scripts/generate_seed_data.py"])
    if "120 decisions, 64 affected, 11 changed, 7 immediate reopen" not in seed_output:
        raise AssertionError(f"Unexpected seed output: {seed_output}")

    blast = run_json([python, "coded-agents/blast-radius-agent/agent.py"])
    assert_equal(blast["totalScanned"], 120, "blast.totalScanned")
    assert_equal(blast["affectedCount"], 64, "blast.affectedCount")
    if "DEC-2026-00421" not in blast["affectedDecisionIds"]:
        raise AssertionError("blast.affectedDecisionIds missing DEC-2026-00421")

    dbom = run_json(
        [python, "coded-agents/dbom-generator-agent/agent.py", "--decision-id", "DEC-2026-00421"]
    )
    assert_equal(dbom["dbomCount"], 1, "dbom.dbomCount")
    assert_equal(
        dbom["dboms"][0]["decisionIngredients"]["policy"]["id"],
        "credit-policy-v7.1",
        "dbom policy",
    )
    assert_equal(dbom["dboms"][0]["faultyComponentMatched"], True, "dbom match")

    replay = run_json(
        [
            python,
            "coded-agents/counterfactual-replay-agent/agent.py",
            "--decision-id",
            "DEC-2026-00421",
        ]
    )
    assert_equal(replay["totalReplayed"], 1, "replay.totalReplayed")
    assert_equal(replay["changedOutcomeCount"], 1, "replay.changedOutcomeCount")
    assert_equal(replay["results"][0]["correctedOutcome"], "manual_review", "replay APP-1042")

    plan = run_json([python, "coded-agents/remediation-planner-agent/agent.py"])
    assert_equal(plan["summary"]["loanCoreReopenActions"], 7, "plan loanCore")
    assert_equal(plan["summary"]["emailDraftActions"], 5, "plan email drafts")
    assert_equal(plan["summary"]["auditRegisterActions"], 11, "plan audit events")

    search = run_json([python, "api-workflows/search-decisions-by-component/workflow.py"])
    assert_equal(search["status"], "completed", "search status")
    assert_equal(search["correlationId"], "RECALL-2026-001", "search correlation")
    assert_equal(search["errors"], [], "search errors")
    assert_equal(search["result"]["affectedCount"], 64, "search affected")

    freeze = run_json([python, "api-workflows/freeze-downstream-actions/workflow.py"])
    assert_equal(freeze["status"], "completed", "freeze status")
    assert_equal(freeze["correlationId"], "RECALL-2026-001", "freeze correlation")
    assert_equal(freeze["errors"], [], "freeze errors")
    assert_equal(freeze["affectedRecordsMarked"], 64, "freeze affected")
    assert_equal(freeze["result"]["affectedRecordsMarked"], 64, "freeze result affected")

    remediation = run_json([python, "api-workflows/remediation-execution/workflow.py"])
    assert_equal(remediation["status"], "completed", "remediation status")
    assert_equal(remediation["correlationId"], "RECALL-2026-001", "remediation correlation")
    assert_equal(remediation["errors"], [], "remediation errors")
    assert_equal(remediation["completedActions"], 44, "remediation completed")
    assert_equal(len(remediation["auditEvents"]), 11, "remediation audit events")

    audit = run_json([python, "api-workflows/audit-register/workflow.py"])
    assert_equal(audit["status"], "completed", "audit status")
    assert_equal(audit["correlationId"], "RECALL-2026-001", "audit correlation")
    assert_equal(audit["errors"], [], "audit errors")
    assert_equal(audit["auditEvent"]["decisionId"], "DEC-2026-00421", "audit decision")

    robot_dir = ROOT / "robots" / "legacy-loan-portal"
    run_text([python, "robot_update_register.py"], cwd=robot_dir)
    register = (robot_dir / "compliance_register.csv").read_text(encoding="utf-8")
    if "AI_RECALL_REOPENED" not in register or "RecallOS-Robot" not in register:
        raise AssertionError("Robot register was not updated")

    case_summary = run_json(
        [
            python,
            "scripts/run_recall_case.py",
            "--output-dir",
            str(ROOT.parent / "outputs" / "recallos-validation-run"),
            "--write-app-data",
            "--simulate-first-test-failure",
        ]
    )
    expected_summary = {
        "caseStatus": "closed",
        "totalScanned": 120,
        "affectedCount": 64,
        "changedOutcomeCount": 11,
        "highRiskCount": 11,
        "customerFacingHighRiskCount": 7,
        "remediationCompleted": 44,
        "remediationTotal": 44,
        "verification": "passed",
    }
    for key, expected in expected_summary.items():
        assert_equal(case_summary[key], expected, f"case {key}")
    if not case_summary.get("manifestHash"):
        raise AssertionError("case manifestHash missing")
    if case_summary.get("criticalRiskCount", 0) < 1:
        raise AssertionError("case criticalRiskCount missing")
    if case_summary.get("potentialExposure", 0) <= 0:
        raise AssertionError("case potentialExposure missing")

    case_file = ROOT.parent / "outputs" / "recallos-validation-run" / "recall_case_RECALL-2026-001.json"
    case_payload = json.loads(case_file.read_text(encoding="utf-8"))
    verification_checks = case_payload["computedFields"]["testCloudVerification"]["checks"]
    assert_equal(
        [check["testId"] for check in verification_checks],
        [f"TC-{i:02d}" for i in range(1, 11)],
        "verification test ids",
    )
    if not all(check["passed"] for check in verification_checks):
        raise AssertionError("Not all verification checks passed")
    timeline_statuses = [item["status"] for item in case_payload["timeline"]]
    for required_status in ["failed", "re-entered", "rerun"]:
        if required_status not in timeline_statuses:
            raise AssertionError(f"Missing rework timeline status: {required_status}")
    evidence = case_payload["computedFields"]["evidenceManifest"]
    for field in ["manifestSha256", "certificateArtifactSha256", "certificateArtifactUri"]:
        if not evidence.get(field):
            raise AssertionError(f"Missing evidence manifest field: {field}")
    case_timeline_hash = evidence["artifacts"]["caseTimeline"]["sha256"]
    from recallos_core.evidence import sha256_json  # noqa: PLC0415

    assert_equal(
        case_timeline_hash,
        sha256_json({"timeline": case_payload["timeline"]}),
        "manifest final timeline hash",
    )
    graph = case_payload["computedFields"]["decisionDependencyGraph"]
    assert_equal(graph["summary"]["affectedDecisions"], 64, "graph affected decisions")

    print(
        json.dumps(
            {
                "status": "passed",
                "validated": [
                    "seed-data",
                    "coded-agents",
                    "api-workflows",
                    "robot",
                    "end-to-end-case",
                ],
                "summary": case_summary,
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
