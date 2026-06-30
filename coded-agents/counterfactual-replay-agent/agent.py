#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

from recallos_core.agents import RECALL_ID, run_counterfactual_replay  # noqa: E402
from recallos_core.data import load_seed  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser(description="RecallOS Counterfactual Replay Coded Agent")
    parser.add_argument("--seed-dir", default=str(ROOT / "seed-data"))
    parser.add_argument("--decision-id", action="append", dest="decision_ids")
    args = parser.parse_args()
    seed = load_seed(Path(args.seed_dir))
    decision_ids = args.decision_ids
    if not decision_ids:
        decision_ids = json.loads((ROOT / "seed-data" / "expected_blast_radius.json").read_text())[
            "affectedDecisionIds"
        ]
    result = run_counterfactual_replay(seed, decision_ids, RECALL_ID)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
