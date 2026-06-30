from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SEED_DIR = ROOT / "seed-data"


def ensure_dir(path: Path) -> Path:
    path.mkdir(parents=True, exist_ok=True)
    return path


def read_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def write_json(path: Path, payload: Any) -> None:
    ensure_dir(path.parent)
    with path.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, indent=2, ensure_ascii=False, sort_keys=False)
        handle.write("\n")


def load_seed(seed_dir: Path = DEFAULT_SEED_DIR) -> Dict[str, Any]:
    return {
        "applications": read_json(seed_dir / "applications.json"),
        "decisions": read_json(seed_dir / "decisions.json"),
        "components": read_json(seed_dir / "components.json"),
        "downstream_actions": read_json(seed_dir / "downstream_actions.json"),
    }


def index_by(items: list[Dict[str, Any]], field: str) -> Dict[str, Dict[str, Any]]:
    return {item[field]: item for item in items}
