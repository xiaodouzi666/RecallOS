#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

from recallos_core.agents import RECALL_ID, generate_dbom_bundle, plan_remediation, run_counterfactual_replay  # noqa: E402
from recallos_core.data import load_seed  # noqa: E402
from recallos_core.risk import score_recall_risk  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser(description="RecallOS Remediation Planner Coded Agent")
    parser.add_argument("--seed-dir", default=str(ROOT / "seed-data"))
    parser.add_argument("--replay-file")
    args = parser.parse_args()
    seed = load_seed(Path(args.seed_dir))
    affected_ids = json.loads((ROOT / "seed-data" / "expected_blast_radius.json").read_text())[
        "affectedDecisionIds"
    ]
    replay = (
        json.loads(Path(args.replay_file).read_text(encoding="utf-8"))
        if args.replay_file
        else run_counterfactual_replay(seed, affected_ids, RECALL_ID)
    )
    dbom = generate_dbom_bundle(seed, affected_ids, RECALL_ID)
    risk = score_recall_risk(seed, replay["results"], seed["downstream_actions"])
    result = plan_remediation(
        replay,
        seed["downstream_actions"],
        dbom["dbomBundleId"],
        risk["scoresByDecision"],
    )
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
