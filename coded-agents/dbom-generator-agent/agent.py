#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

from recallos_core.agents import RECALL_ID, generate_dbom_bundle  # noqa: E402
from recallos_core.data import load_seed  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser(description="RecallOS DBOM Generator Coded Agent")
    parser.add_argument("--seed-dir", default=str(ROOT / "seed-data"))
    parser.add_argument("--decision-id", action="append", dest="decision_ids")
    parser.add_argument("--decision-ids-file")
    parser.add_argument("--component-type", default="policy")
    parser.add_argument("--component-id", default="credit-policy-v7.1")
    args = parser.parse_args()
    seed = load_seed(Path(args.seed_dir))
    decision_ids = args.decision_ids or []
    if args.decision_ids_file:
        decision_ids.extend(json.loads(Path(args.decision_ids_file).read_text(encoding="utf-8")))
    if not decision_ids:
        decision_ids = json.loads((ROOT / "seed-data" / "expected_blast_radius.json").read_text())[
            "affectedDecisionIds"
        ]
    result = generate_dbom_bundle(
        seed,
        decision_ids,
        RECALL_ID,
        args.component_type,
        args.component_id,
    )
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
