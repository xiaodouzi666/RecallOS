#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="Mock API Workflow: WriteAuditRegister")
    parser.add_argument("--recall-id", default="RECALL-2026-001")
    parser.add_argument("--decision-id", default="DEC-2026-00421")
    parser.add_argument("--certificate-uri", default="certificates/AI_Decision_Recall_Certificate.md")
    args = parser.parse_args()
    result = {
        "auditEvent": {
            "eventType": "ai_decision_recall_certificate_registered",
            "recallId": args.recall_id,
            "decisionId": args.decision_id,
            "certificateUri": args.certificate_uri,
            "writtenAt": "2026-06-27T10:36:00+02:00",
        },
    }
    event = {
        "status": "completed",
        "correlationId": args.recall_id,
        "result": result,
        "errors": [],
        **result,
    }
    print(json.dumps(event, indent=2))


if __name__ == "__main__":
    main()
