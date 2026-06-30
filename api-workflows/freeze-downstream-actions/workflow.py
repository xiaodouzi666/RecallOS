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
from recallos_core.workflows import freeze_downstream_actions  # noqa: E402


def main() -> None:
    parser = argparse.ArgumentParser(description="Mock API Workflow: FreezeDownstreamActions")
    parser.add_argument("--seed-dir", default=str(ROOT / "seed-data"))
    args = parser.parse_args()
    seed = load_seed(Path(args.seed_dir))
    affected_ids = json.loads((ROOT / "seed-data" / "expected_blast_radius.json").read_text())[
        "affectedDecisionIds"
    ]
    result = freeze_downstream_actions(seed["downstream_actions"], affected_ids, RECALL_ID)
    printable = {key: value for key, value in result.items() if key != "downstreamActions"}
    if "result" in printable:
        printable["result"] = {
            key: value for key, value in printable["result"].items() if key != "downstreamActions"
        }
    print(json.dumps(printable, indent=2))


if __name__ == "__main__":
    main()
