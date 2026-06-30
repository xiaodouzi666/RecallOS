#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="Mock RPA Robot: update legacy compliance register.")
    parser.add_argument("--register", default="compliance_register.csv")
    parser.add_argument("--decision-id", default="DEC-2026-00421")
    parser.add_argument("--application-id", default="APP-1042")
    parser.add_argument("--recall-id", default="RECALL-2026-001")
    args = parser.parse_args()

    path = Path(args.register)
    rows = []
    if path.exists():
        with path.open("r", newline="", encoding="utf-8") as handle:
            rows = list(csv.DictReader(handle))

    updated = False
    for row in rows:
        if row["decisionId"] == args.decision_id:
            row["status"] = "AI_RECALL_REOPENED"
            row["lastUpdatedBy"] = "RecallOS-Robot"
            row["recallId"] = args.recall_id
            updated = True
    if not updated:
        rows.append(
            {
                "decisionId": args.decision_id,
                "applicationId": args.application_id,
                "status": "AI_RECALL_REOPENED",
                "lastUpdatedBy": "RecallOS-Robot",
                "recallId": args.recall_id,
            }
        )

    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["decisionId", "applicationId", "status", "lastUpdatedBy", "recallId"],
        )
        writer.writeheader()
        writer.writerows(rows)
    print(f"Updated {path} for {args.decision_id}.")


if __name__ == "__main__":
    main()
