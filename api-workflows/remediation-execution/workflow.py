#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

from recallos_core.agents import RECALL_ID  # noqa: E402
from recallos_core.data import load_seed  # noqa: E402
from recallos_core.workflows import execute_remediation  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser(description="Mock API Workflow: RemediationExecution")
    parser.add_argument("--seed-dir", default=str(ROOT / "seed-data"))
    parser.add_argument(
        "--plan-file",
        default=str(ROOT / "seed-data" / "expected_remediation_actions.json"),
    )
    args = parser.parse_args()
    seed = load_seed(Path(args.seed_dir))
    plan = json.loads(Path(args.plan_file).read_text(encoding="utf-8"))
    result = execute_remediation(seed, plan, RECALL_ID)
    printable = {key: value for key, value in result.items() if key != "downstreamActions"}
    if "result" in printable:
        printable["result"] = {
            key: value for key, value in printable["result"].items() if key != "downstreamActions"
        }
    print(json.dumps(printable, indent=2))


if __name__ == "__main__":
    main()
