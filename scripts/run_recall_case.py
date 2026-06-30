#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from recallos_core.case_runner import build_case  # noqa: E402
from recallos_core.data import load_seed  # noqa: E402


def write_dashboard_data(app_dir: Path, snapshot: dict) -> None:
    payload = json.dumps(snapshot, indent=2, ensure_ascii=False)
    (app_dir / "data.js").write_text(f"window.RECALLOS_SNAPSHOT = {payload};\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the RecallOS end-to-end demo case.")
    parser.add_argument("--seed-dir", default=str(ROOT / "seed-data"))
    parser.add_argument("--output-dir", default=str(ROOT / "runs" / "latest"))
    parser.add_argument("--write-app-data", action="store_true")
    parser.add_argument("--simulate-first-test-failure", action="store_true")
    parser.add_argument(
        "--human-review-scenario",
        choices=["approved", "needs_more_evidence", "revise_plan"],
        default="approved",
    )
    args = parser.parse_args()

    seed = load_seed(Path(args.seed_dir))
    result = build_case(
        seed,
        Path(args.output_dir),
        args.simulate_first_test_failure,
        args.human_review_scenario,
    )
    if args.write_app_data:
        write_dashboard_data(ROOT / "app", result["snapshot"])
    summary = result["snapshot"]["summary"]
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
