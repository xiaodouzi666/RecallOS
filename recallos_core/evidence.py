from __future__ import annotations

import hashlib
import json
from typing import Any, Dict


def canonical_json(payload: Any) -> str:
    return json.dumps(payload, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def sha256_json(payload: Any) -> str:
    return sha256_text(canonical_json(payload))


def build_evidence_manifest(
    recall_id: str,
    artifacts: Dict[str, Any],
) -> Dict[str, Any]:
    artifact_entries = {}
    for name, artifact in artifacts.items():
        artifact_entries[name] = {
            "sha256": sha256_json(artifact),
            "uri": artifact.get("uri", f"storage://case-snapshots/{name}.json")
            if isinstance(artifact, dict)
            else f"storage://case-snapshots/{name}",
        }

    manifest_body = {
        "recallId": recall_id,
        "manifestVersion": "1.0",
        "artifacts": artifact_entries,
    }
    manifest_body["manifestSha256"] = sha256_json(manifest_body)
    return manifest_body
