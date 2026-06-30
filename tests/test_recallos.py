from __future__ import annotations

import tempfile
import unittest
import json
import subprocess
import sys
from pathlib import Path

from recallos_core.agents import (
    RECALL_ID,
    generate_dbom_bundle,
    plan_remediation,
    run_blast_radius,
    run_counterfactual_replay,
)
from recallos_core.case_runner import build_case, can_close_case
from recallos_core.data import load_seed
from recallos_core.evidence import sha256_json, sha256_text
from recallos_core.policy import corrected_policy_decision, corrected_policy_reason
from recallos_core.risk import score_recall_risk
from recallos_core.workflows import execute_remediation, freeze_downstream_actions


ROOT = Path(__file__).resolve().parents[1]


class RecallOSTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.seed = load_seed(ROOT / "seed-data")
        cls.blast = run_blast_radius(
            cls.seed,
            {
                "recallId": RECALL_ID,
                "faultyComponentType": "policy",
                "faultyComponentId": "credit-policy-v7.1",
                "timeWindowStart": "2026-06-01",
                "timeWindowEnd": "2026-06-27",
            },
        )
        cls.replay = run_counterfactual_replay(
            cls.seed, cls.blast["affectedDecisionIds"], RECALL_ID
        )
        cls.dbom = generate_dbom_bundle(
            cls.seed, cls.blast["affectedDecisionIds"], RECALL_ID
        )
        cls.plan = plan_remediation(
            cls.replay,
            cls.seed["downstream_actions"],
            cls.dbom["dbomBundleId"],
            score_recall_risk(
                cls.seed, cls.replay["results"], cls.seed["downstream_actions"]
            )["scoresByDecision"],
        )

    def test_seed_truth_table_counts(self) -> None:
        self.assertEqual(len(self.seed["decisions"]), 120)
        self.assertEqual(self.blast["affectedCount"], 64)
        self.assertEqual(self.replay["changedOutcomeCount"], 11)
        self.assertEqual(self.plan["summary"]["loanCoreReopenActions"], 7)

    def test_nonexistent_component_returns_no_impact(self) -> None:
        result = run_blast_radius(
            self.seed,
            {
                "recallId": RECALL_ID,
                "faultyComponentType": "policy",
                "faultyComponentId": "missing-policy",
                "timeWindowStart": "2026-06-01",
                "timeWindowEnd": "2026-06-27",
            },
        )
        self.assertEqual(result["affectedCount"], 0)
        self.assertEqual(result["confidence"], 0.0)
        self.assertTrue(result["missingEvidenceWarnings"])

    def test_prompt_component_blast_radius_is_supported(self) -> None:
        result = run_blast_radius(
            self.seed,
            {
                "recallId": RECALL_ID,
                "faultyComponentType": "prompt",
                "faultyComponentId": "prompt-2026-05-19",
                "timeWindowStart": "2026-06-01",
                "timeWindowEnd": "2026-06-27",
            },
        )
        self.assertEqual(result["affectedCount"], 64)
        self.assertIn("DEC-2026-00421", result["affectedDecisionIds"])

    def test_dbom_faulty_match_supports_prompt_component(self) -> None:
        dbom = generate_dbom_bundle(
            self.seed,
            ["DEC-2026-00421"],
            RECALL_ID,
            "prompt",
            "prompt-2026-05-19",
        )["dboms"][0]
        self.assertTrue(dbom["faultyComponentMatched"])
        self.assertEqual(dbom["faultyComponent"]["type"], "prompt")
        self.assertEqual(dbom["faultyComponent"]["id"], "prompt-2026-05-19")

    def test_low_revenue_unknown_guarantee_requires_manual_review(self) -> None:
        self.assertEqual(
            corrected_policy_decision(4200, "pending_review", 0.31),
            "manual_review",
        )
        self.assertIn(
            "unrecognized guarantee",
            corrected_policy_reason(4200, "pending_review", 0.31),
        )

    def test_app_1042_replays_from_rejected_to_manual_review(self) -> None:
        app_1042 = next(
            result for result in self.replay["results"] if result["applicationId"] == "APP-1042"
        )
        self.assertEqual(app_1042["decisionId"], "DEC-2026-00421")
        self.assertEqual(app_1042["originalOutcome"], "rejected")
        self.assertEqual(app_1042["correctedOutcome"], "manual_review")
        self.assertEqual(app_1042["severity"], "high")

    def test_normal_low_revenue_without_guarantee_remains_rejected(self) -> None:
        unchanged_rejection = next(
            result for result in self.replay["results"] if result["decisionId"] == "DEC-2026-00380"
        )
        self.assertFalse(unchanged_rejection["changed"])
        self.assertEqual(unchanged_rejection["correctedOutcome"], "rejected")

    def test_dbom_contains_faulty_policy_and_downstream_impact(self) -> None:
        dbom = next(dbom for dbom in self.dbom["dboms"] if dbom["decisionId"] == "DEC-2026-00421")
        self.assertTrue(dbom["faultyComponentMatched"])
        self.assertEqual(dbom["decisionIngredients"]["policy"]["id"], "credit-policy-v7.1")
        self.assertTrue(dbom["downstreamImpact"]["emailSent"])
        self.assertTrue(dbom["downstreamImpact"]["crmClosed"])

    def test_remediation_plan_counts(self) -> None:
        self.assertEqual(self.plan["summary"]["loanCoreReopenActions"], 7)
        self.assertEqual(self.plan["summary"]["crmReopenActions"], 7)
        self.assertEqual(self.plan["summary"]["ticketReopenActions"], 7)
        self.assertEqual(self.plan["summary"]["emailDraftActions"], 5)
        self.assertEqual(self.plan["summary"]["legacyPortalActions"], 7)
        self.assertEqual(self.plan["summary"]["auditRegisterActions"], 11)
        self.assertEqual(self.plan["dryRunPreview"]["wouldCreateEmailDrafts"], 5)

    def test_remediation_plan_has_idempotency_and_retry_metadata(self) -> None:
        keys = [action["idempotencyKey"] for action in self.plan["actions"]]
        self.assertEqual(len(keys), len(set(keys)))
        app_1042_crm = next(
            action
            for action in self.plan["actions"]
            if action["applicationId"] == "APP-1042" and action["system"] == "CRM"
        )
        self.assertTrue(app_1042_crm["safeToRetry"])
        self.assertEqual(app_1042_crm["maxAttempts"], 3)
        self.assertIn("rollbackAction", app_1042_crm)

    def test_risk_scoring_is_deterministic_and_prioritizes_app_1042(self) -> None:
        risk = score_recall_risk(
            self.seed, self.replay["results"], self.seed["downstream_actions"]
        )
        app_1042 = risk["scoresByDecision"]["DEC-2026-00421"]
        self.assertEqual(app_1042["riskBand"], "critical")
        self.assertGreaterEqual(app_1042["riskScore"], 80)
        self.assertIn("changed_outcome", app_1042["drivers"])
        self.assertEqual(
            sha256_json(risk),
            sha256_json(
                score_recall_risk(
                    self.seed, self.replay["results"], self.seed["downstream_actions"]
                )
            ),
        )

    def test_remediation_execution_updates_mock_systems(self) -> None:
        status = execute_remediation(self.seed, self.plan, RECALL_ID)
        app_1042 = next(
            record for record in status["downstreamActions"] if record["applicationId"] == "APP-1042"
        )
        self.assertEqual(app_1042["loanCore"]["status"], "manual_review_required")
        self.assertEqual(app_1042["crm"]["status"], "reopened_due_to_ai_recall")
        self.assertEqual(app_1042["ticket"]["status"], "reopened")
        self.assertEqual(app_1042["email"]["status"], "draft_created")
        self.assertEqual(len(status["auditEvents"]), 11)
        self.assertTrue(status["retryEvents"])
        self.assertEqual(status["retryEvents"][0]["errorCode"], "CRM_TIMEOUT")
        rerun = execute_remediation(
            self.seed,
            self.plan,
            RECALL_ID,
            prior_execution_state=status,
        )
        self.assertEqual(rerun["completedActions"], 44)
        self.assertEqual(rerun["skippedActions"], 44)
        self.assertEqual(len(rerun["emailDrafts"]), 5)
        self.assertEqual(len(rerun["auditEvents"]), 11)

    def test_freeze_counts_only_records_that_exist(self) -> None:
        status = freeze_downstream_actions(
            self.seed["downstream_actions"],
            ["DEC-2026-00421", "DEC-DOES-NOT-EXIST"],
            RECALL_ID,
        )
        self.assertEqual(status["status"], "completed")
        self.assertEqual(status["correlationId"], RECALL_ID)
        self.assertEqual(status["affectedRecordsMarked"], 1)
        self.assertEqual(status["missingDecisionIds"], ["DEC-DOES-NOT-EXIST"])
        self.assertEqual(status["result"]["affectedRecordsMarked"], 1)

    def test_case_rework_loop_blocks_then_closes(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(
                self.seed,
                Path(tmpdir),
                simulate_first_test_failure=True,
            )
        case = result["case"]
        self.assertEqual(case["caseStatus"], "closed")
        self.assertEqual(case["reentryCount"], 1)
        self.assertEqual(case["computedFields"]["regressionTestStatus"], "passed")
        statuses = [(entry["stage"], entry["status"]) for entry in case["timeline"]]
        self.assertIn(("Recall Verification", "failed"), statuses)
        self.assertIn(("Impact Classification & Remediation Plan", "re-entered"), statuses)
        self.assertIn(("Remediation Execution", "rerun"), statuses)
        self.assertTrue(case["computedFields"]["closureBlockedByFailedVerification"])
        self.assertTrue(case["computedFields"]["closureGuardAfterFinalApproval"]["canClose"])

    def test_verification_has_ten_numbered_checks(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(self.seed, Path(tmpdir), simulate_first_test_failure=True)
        checks = result["case"]["computedFields"]["testCloudVerification"]["checks"]
        self.assertEqual([check["testId"] for check in checks], [f"TC-{i:02d}" for i in range(1, 11)])
        self.assertTrue(all(check["passed"] for check in checks))
        by_id = {check["testId"]: check for check in checks}
        self.assertTrue(by_id["TC-08"]["passed"])
        self.assertTrue(by_id["TC-10"]["passed"])

    def test_evidence_manifest_and_dependency_graph_are_generated(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(self.seed, Path(tmpdir), simulate_first_test_failure=True)
        case = result["case"]
        manifest = case["computedFields"]["evidenceManifest"]
        graph = case["computedFields"]["decisionDependencyGraph"]
        self.assertIn("manifestSha256", manifest)
        self.assertIn("certificateArtifactSha256", manifest)
        self.assertIn("dbomBundle", manifest["artifacts"])
        self.assertEqual(graph["summary"]["affectedDecisions"], 64)
        self.assertTrue(
            any(edge["from"] == "credit-policy-v7.1" and edge["to"] == "DEC-2026-00421" for edge in graph["edges"])
        )

    def test_manifest_covers_final_timeline(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(self.seed, Path(tmpdir), simulate_first_test_failure=True)
        case = result["case"]
        manifest_hash = case["computedFields"]["evidenceManifest"]["artifacts"]["caseTimeline"]["sha256"]
        actual_hash = sha256_json({"timeline": case["timeline"]})
        self.assertEqual(manifest_hash, actual_hash)
        self.assertEqual(case["timeline"][-1]["stage"], "Recall Certificate & Closure")

    def test_certificate_hash_semantics_are_valid(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(self.seed, Path(tmpdir), simulate_first_test_failure=True)
            cert_path = Path(tmpdir) / "certificates" / "AI_Decision_Recall_Certificate.md"
            certificate = cert_path.read_text(encoding="utf-8")
        manifest = result["case"]["computedFields"]["evidenceManifest"]
        self.assertNotIn("Certificate body SHA-256", certificate)
        self.assertIn("Certificate artifact URI", certificate)
        self.assertEqual(manifest["certificateArtifactSha256"], sha256_text(certificate))

    def test_case_does_not_close_before_certificate_exists(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            case = {
                "computedFields": {
                    "regressionTestStatus": "passed",
                    "finalApprovalStatus": "approved",
                    "evidenceManifest": {"manifestSha256": "abc"},
                }
            }
            missing_cert = Path(tmpdir) / "missing.md"
            self.assertFalse(can_close_case(case, missing_cert))
            missing_cert.write_text("draft certificate", encoding="utf-8")
            self.assertTrue(can_close_case(case, missing_cert))

    def test_final_closure_guard_is_explicit(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(self.seed, Path(tmpdir), simulate_first_test_failure=True)
        case = result["case"]
        self.assertEqual(case["caseStatus"], "closed")
        self.assertFalse(case["computedFields"]["closureGuardBeforeFinalApproval"]["canClose"])
        self.assertIn(
            "finalApprovalStatus",
            case["computedFields"]["closureGuardBeforeFinalApproval"]["missing"],
        )
        self.assertTrue(case["computedFields"]["closureGuardAfterFinalApproval"]["canClose"])
        self.assertTrue(case["computedFields"]["closureGuardFinal"]["canClose"])

    def test_failed_verification_sets_closure_blocked_flag(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(self.seed, Path(tmpdir), simulate_first_test_failure=True)
        case = result["case"]
        self.assertTrue(case["computedFields"]["verificationFailureObserved"])
        self.assertTrue(case["computedFields"]["closureBlockedByFailedVerification"])

    def test_human_needs_more_evidence_reenters_blast_radius(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(
                self.seed,
                Path(tmpdir),
                human_review_scenario="needs_more_evidence",
            )
        statuses = [(entry["stage"], entry["status"]) for entry in result["case"]["timeline"]]
        self.assertIn(("Human Review", "failed"), statuses)
        self.assertIn(("Blast Radius Analysis", "re-entered"), statuses)
        self.assertEqual(result["case"]["computedFields"]["humanReviewOutcome"]["scenario"], "needs_more_evidence")

    def test_human_revise_plan_reenters_remediation_planning(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            result = build_case(
                self.seed,
                Path(tmpdir),
                human_review_scenario="revise_plan",
            )
        statuses = [(entry["stage"], entry["status"]) for entry in result["case"]["timeline"]]
        self.assertIn(("Human Review", "failed"), statuses)
        self.assertIn(("Impact Classification & Remediation Plan", "re-entered"), statuses)
        self.assertIn("revisionNote", result["case"]["computedFields"]["remediationPlan"])

    def test_all_api_workflows_return_contract_shape(self) -> None:
        workflow_paths = [
            "api-workflows/search-decisions-by-component/workflow.py",
            "api-workflows/freeze-downstream-actions/workflow.py",
            "api-workflows/remediation-execution/workflow.py",
            "api-workflows/audit-register/workflow.py",
        ]
        for workflow in workflow_paths:
            completed = subprocess.run(
                [sys.executable, workflow],
                cwd=ROOT,
                check=True,
                text=True,
                capture_output=True,
            )
            payload = json.loads(completed.stdout)
            self.assertEqual(payload["status"], "completed", workflow)
            self.assertEqual(payload["correlationId"], RECALL_ID, workflow)
            self.assertIn("result", payload, workflow)
            self.assertEqual(payload["errors"], [], workflow)


if __name__ == "__main__":
    unittest.main()
