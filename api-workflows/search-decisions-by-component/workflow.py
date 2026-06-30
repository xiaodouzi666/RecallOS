#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

from recallos_core.agents import RECALL_ID, run_blast_radius  # noqa: E402
from recallos_core.data import load_seed  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser(description="Mock API Workflow: SearchDecisionsByComponent")
    parser.add_argument("--component-id", default="credit-policy-v7.1")
    parser.add_argument("--component-type", default="policy")
    parser.add_argument("--seed-dir", default=str(ROOT / "seed-data"))
    args = parser.parse_args()
    seed = load_seed(Path(args.seed_dir))
    result = run_blast_radius(
        seed,
        {
            "recallId": RECALL_ID,
            "faultyComponentType": args.component_type,
            "faultyComponentId": args.component_id,
            "timeWindowStart": "2026-06-01",
            "timeWindowEnd": "2026-06-27",
        },
    )
    print(json.dumps({"status": "completed", "correlationId": RECALL_ID, "result": result, "errors": []}, indent=2))


if __name__ == "__main__":
    main()
