from __future__ import annotations

import os
import re
import shutil
import subprocess
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT.parent / "outputs"
BUILD = OUT / "video-build"
VIDEO_TOOLS = OUT / "video-build-tools"
FFMPEG = Path(
    os.environ.get(
        "FFMPEG",
        VIDEO_TOOLS / "node_modules" / "ffmpeg-static" / "ffmpeg",
    )
)
NODE = Path(
    os.environ.get(
        "NODE",
        "/Users/liujunjun/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node",
    )
)
NODE_PATH = os.environ.get(
    "NODE_PATH",
    "/Users/liujunjun/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules",
)

WIDTH = 1280
HEIGHT = 720
FPS = 30
FINAL_VIDEO = OUT / "RecallOS_Demo_With_Audio.mp4"
NARRATION_TEXT = OUT / "RecallOS_Demo_Narration.txt"
NARRATION_AUDIO = BUILD / "narration.aiff"
CONTROL_WEBM = BUILD / "control-tower.webm"

BG = "#f4f7fb"
INK = "#18222f"
MUTED = "#667085"
BLUE = "#2764d9"
TEAL = "#08847f"
AMBER = "#b86b00"
RED = "#c23b3b"
GREEN = "#147a43"
VIOLET = "#6b4acb"


NARRATION = """RecallOS is product recall for AI decisions.
In an enterprise, fixing a faulty model, prompt, or policy is not enough.
The wrong decisions already live in CRMs, loan systems, emails, tickets, and audit trails.

This demo uses Northstar SME Lending.
An internal audit finds that credit-policy-v7.1 incorrectly rejected low revenue applicants,
even when they had an approved guarantee.
RecallOS opens an AI Decision Recall case and drives the work from trigger to certificate.

UiPath is the orchestration and governance layer.
Maestro coordinates the recall case.
Agent Builder handles intake, impact classification, customer communication drafts, and audit summaries.
Coded agents perform blast-radius analysis, DBOM generation, deterministic replay, and remediation planning.
API Workflows and an RPA robot update downstream systems.
Test Cloud blocks closure until verification passes.
Action Center keeps humans in charge at review, escalation, and final approval.

Here is the live UiPath evidence for the submission.
The solution package is published as Solution 1, version 1.0.0.
It is deployed to the Shared / Solution 1 folder in Orchestrator.
The Maestro BPMN process ran successfully, with a completed job recorded for the submission package.

Now we switch to the RecallOS Control Tower.
This is the running prototype view that the reviewer can open locally, or through GitHub Pages once Pages is enabled.
The top metrics show one hundred twenty historical decisions scanned,
sixty-four decisions using the faulty policy,
eleven changed outcomes after corrected replay,
seven customer-facing high-risk cases,
and forty-four remediation actions completed.

The Blast Radius view lists affected decisions and highlights APP-1042.
Its original decision was rejected.
The DBOM view explains exactly what produced that decision:
the policy, prompt, agent version, model, input facts, retrieval index, and downstream actions.
This is the evidence object that makes an AI recall auditable.

Replay then reruns the affected decisions under corrected policy v7.2.
APP-1042 becomes manual review, because the applicant had an approved university startup guarantee.
The Risk and Exposure view prioritizes critical cases by customer harm, requested amount, and downstream impact.

The remediation plan is intentionally idempotent.
It reopens LoanCore, CRM, and ticket records, creates draft-only customer corrections,
writes audit register events, and updates a legacy portal through the robot simulation.
No real emails are sent.

Human review is not a cosmetic step.
The case supports approval, a request for more evidence that loops back to blast radius,
or a revised plan that loops back to remediation planning.
The BPMN file in the repository models Intake, Blast Radius, DBOM, Freeze, Replay, Human Review,
Remediation, Test, Certificate, plus the exception loops.

Test Cloud-style verification includes ten checks.
The demo intentionally records a failed verification gate, re-enters planning, reruns remediation,
and only closes after verification passes, the certificate exists, the evidence manifest is hashed,
and compliance final approval is recorded.

The local test suite proves the same behavior.
Twenty-five tests pass, including the full BPMN orchestration model.
The end-to-end validator reports the case closed, verification passed, eleven changed outcomes,
forty-four of forty-four remediation actions completed, and a stable manifest hash.

Finally, RecallOS produces an AI Decision Recall Certificate.
It packages the recall ID, blast radius, DBOM evidence, replay result, remediation status,
Test Cloud result, human approvals, and certificate artifact hash.
The public GitHub repository includes the MIT license, setup instructions, UiPath component mapping,
the full BPMN model, screenshots, deck, and coding-agent evidence.

RecallOS turns agentic AI incidents from a monitoring problem into an operational recall workflow:
find the affected decisions, explain them, freeze risk, replay safely, keep humans in control,
remediate across systems, verify the fix, and leave an audit-ready certificate.
"""


def run(cmd: list[str | Path], *, cwd: Path = ROOT, env: dict[str, str] | None = None) -> None:
    printable = " ".join(str(part) for part in cmd)
    print(f"$ {printable}")
    subprocess.run([str(part) for part in cmd], cwd=cwd, env=env, check=True)


def capture_output(cmd: list[str | Path]) -> str:
    completed = subprocess.run(
        [str(part) for part in cmd],
        cwd=ROOT,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        check=False,
    )
    return completed.stdout


def media_duration(path: Path) -> float:
    output = capture_output([FFMPEG, "-i", path])
    match = re.search(r"Duration: (\d+):(\d+):(\d+(?:\.\d+)?)", output)
    if not match:
        raise RuntimeError(f"Could not read duration for {path}:\n{output}")
    hours, minutes, seconds = match.groups()
    return int(hours) * 3600 + int(minutes) * 60 + float(seconds)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Helvetica Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Helvetica.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size)
        except OSError:
            continue
    return ImageFont.load_default()


def text_wrap(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont, max_width: int) -> list[str]:
    lines: list[str] = []
    for paragraph in text.split("\n"):
        if not paragraph.strip():
            lines.append("")
            continue
        words = paragraph.split()
        current = ""
        for word in words:
            candidate = f"{current} {word}".strip()
            width = draw.textbbox((0, 0), candidate, font=fnt)[2]
            if width <= max_width or not current:
                current = candidate
            else:
                lines.append(current)
                current = word
        if current:
            lines.append(current)
    return lines


def draw_wrapped(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.ImageFont,
    fill: str,
    max_width: int,
    line_gap: int = 8,
) -> int:
    x, y = xy
    for line in text_wrap(draw, text, fnt, max_width):
        if line:
            draw.text((x, y), line, font=fnt, fill=fill)
        y += fnt.size + line_gap
    return y


def shadowed_panel(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str = "white") -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle((x1 + 6, y1 + 8, x2 + 6, y2 + 8), radius=18, fill="#d7dde8")
    draw.rounded_rectangle(box, radius=18, fill=fill, outline="#d8dee9", width=1)


def paste_image(canvas: Image.Image, path: Path, box: tuple[int, int, int, int]) -> None:
    image = Image.open(path).convert("RGB")
    x1, y1, x2, y2 = box
    fitted = ImageOps.contain(image, (x2 - x1, y2 - y1))
    x = x1 + (x2 - x1 - fitted.width) // 2
    y = y1 + (y2 - y1 - fitted.height) // 2
    canvas.paste(fitted, (x, y))


def base_slide(title: str, subtitle: str | None = None) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, WIDTH, 82), fill="#0e1f35")
    draw.rectangle((0, 82, WIDTH, 88), fill=TEAL)
    draw.text((54, 22), "RecallOS", font=font(20, True), fill="#c7f2e9")
    draw.text((54, 94), title, font=font(38, True), fill=INK)
    if subtitle:
        draw_wrapped(draw, (56, 145), subtitle, font(21), MUTED, 690, 5)
    return image, draw


def slide_title(path: Path) -> None:
    image, draw = base_slide(
        "Product Recall for AI Decisions",
        "A UiPath Maestro-driven recall case for historical decisions affected by a faulty AI component.",
    )
    chips = [
        ("120", "decisions scanned", BLUE),
        ("64", "affected", TEAL),
        ("11", "changed outcomes", AMBER),
        ("44/44", "remediated", GREEN),
    ]
    x = 56
    for value, label, color in chips:
        shadowed_panel(draw, (x, 250, x + 250, 375))
        draw.text((x + 22, 274), value, font=font(42, True), fill=color)
        draw.text((x + 22, 328), label, font=font(18), fill=MUTED)
        x += 292
    draw.text((56, 455), "Track: UiPath Maestro Case", font=font(28, True), fill=INK)
    draw.text((56, 504), "Scenario: Northstar SME Lending / credit-policy-v7.1", font=font(22), fill=MUTED)
    draw.text((56, 548), "Outcome: audit-ready AI Decision Recall Certificate", font=font(22), fill=MUTED)
    image.save(path)


def slide_architecture(path: Path) -> None:
    image, draw = base_slide(
        "UiPath as the orchestration and governance layer",
        "Maestro coordinates agents, API workflows, robots, people, Test Cloud, and audit evidence end to end.",
    )
    boxes = [
        ("Intake", BLUE),
        ("Blast Radius", TEAL),
        ("DBOM", VIOLET),
        ("Freeze", AMBER),
        ("Replay", BLUE),
        ("Human Review", RED),
        ("Remediation", GREEN),
        ("Test", VIOLET),
        ("Certificate", INK),
    ]
    positions = [
        (78, 235),
        (420, 235),
        (762, 235),
        (762, 365),
        (420, 365),
        (78, 365),
        (78, 495),
        (420, 495),
        (762, 495),
    ]
    for index, ((label, color), (x, y)) in enumerate(zip(boxes, positions), start=1):
        shadowed_panel(draw, (x, y, x + 280, y + 78))
        draw.ellipse((x + 18, y + 22, x + 52, y + 56), fill=color)
        draw.text((x + 29, y + 27), str(index), font=font(17, True), fill="white", anchor="mm")
        draw.text((x + 70, y + 25), label, font=font(22, True), fill=color)

    def arrow(x1: int, y1: int, x2: int, y2: int) -> None:
        draw.line((x1, y1, x2, y2), fill="#8b96a8", width=4)
        if x2 > x1:
            draw.polygon([(x2, y2), (x2 - 12, y2 - 9), (x2 - 12, y2 + 9)], fill="#8b96a8")
        elif x2 < x1:
            draw.polygon([(x2, y2), (x2 + 12, y2 - 9), (x2 + 12, y2 + 9)], fill="#8b96a8")
        elif y2 > y1:
            draw.polygon([(x2, y2), (x2 - 9, y2 - 12), (x2 + 9, y2 - 12)], fill="#8b96a8")

    arrows = [
        (358, 274, 420, 274),
        (700, 274, 762, 274),
        (902, 313, 902, 365),
        (762, 404, 700, 404),
        (420, 404, 358, 404),
        (218, 443, 218, 495),
        (358, 534, 420, 534),
        (700, 534, 762, 534),
    ]
    for x1, y1, x2, y2 in arrows:
        arrow(x1, y1, x2, y2)
    draw.arc((535, 418, 842, 600), start=18, end=183, fill=RED, width=4)
    draw.text((445, 632), "Exception loops: more evidence, revise plan, failed tests", font=font(19, True), fill=RED)
    image.save(path)


def slide_uipath(path: Path) -> None:
    image, draw = base_slide(
        "Live UiPath Automation Cloud evidence",
        "The submission includes a published solution, deployed process, and successful Orchestrator job.",
    )
    shadowed_panel(draw, (54, 205, 1226, 650))
    paste_image(image, ROOT / "docs" / "screenshots" / "uipath-successful-job.png", (78, 224, 1198, 600))
    draw.text((80, 610), "Solution 1 v1.0.0 / Shared / Solution 1 / Maestro BPMN / Successful job", font=font(18, True), fill=GREEN)
    image.save(path)


def slide_problem(path: Path) -> None:
    image, draw = base_slide(
        "The hard part is history",
        "When a faulty AI component is discovered, enterprises must repair the decisions that already happened.",
    )
    bullets = [
        ("Faulty component", "credit-policy-v7.1 rejects guaranteed applicants"),
        ("Historical impact", "decisions already reached CRM, tickets, emails, and audit records"),
        ("Recall objective", "find, explain, freeze, replay, review, remediate, verify, certify"),
    ]
    y = 238
    for label, body in bullets:
        shadowed_panel(draw, (72, y, 1180, y + 96))
        draw.ellipse((96, y + 28, 136, y + 68), fill=TEAL)
        draw.text((158, y + 22), label, font=font(24, True), fill=INK)
        draw.text((158, y + 55), body, font=font(20), fill=MUTED)
        y += 124
    image.save(path)


def slide_validation(path: Path) -> None:
    image, draw = base_slide(
        "Validated end to end",
        "The local implementation exercises seed data, coded agents, workflows, robot simulation, case runner, and BPMN model.",
    )
    shadowed_panel(draw, (72, 220, 1208, 625), fill="#111827")
    terminal = """$ ../.venv/bin/python -m pytest -q
.........................                                                [100%]
25 passed in 0.46s

$ ../.venv/bin/python scripts/validate_all.py
status: passed
caseStatus: closed
totalScanned: 120
affectedCount: 64
changedOutcomeCount: 11
remediation: 44/44
verification: passed
manifestHash: db577616de91"""
    draw_wrapped(draw, (104, 250), terminal, font(21), "#e6edf6", 1040, 5)
    image.save(path)


def slide_human_loops(path: Path) -> None:
    image, draw = base_slide(
        "Humans stay in charge",
        "Action Center review and exception loops are explicit, not decorative.",
    )
    items = [
        ("Approve plan", "continue to remediation", GREEN),
        ("Need more evidence", "loop back to Blast Radius", AMBER),
        ("Revise plan", "loop back to remediation planning", RED),
        ("Test Cloud fails", "rerun planning unless senior escalation is required", VIOLET),
    ]
    y = 220
    for title, body, color in items:
        shadowed_panel(draw, (76, y, 600, y + 82))
        draw.rectangle((76, y, 92, y + 82), fill=color)
        draw.text((112, y + 16), title, font=font(22, True), fill=INK)
        draw.text((112, y + 48), body, font=font(18), fill=MUTED)
        y += 98
    shadowed_panel(draw, (665, 220, 1188, 612))
    draw.text((700, 250), "Full BPMN model", font=font(30, True), fill=INK)
    draw_wrapped(
        draw,
        (700, 308),
        "maestro/recallos-ai-decision-recall.bpmn models Intake -> Blast Radius -> DBOM -> Freeze -> Replay -> Human Review -> Remediation -> Test -> Certificate, with Action Center tasks and exception loops.",
        font(21),
        MUTED,
        430,
        8,
    )
    image.save(path)


def slide_certificate(path: Path) -> None:
    image, draw = base_slide(
        "Audit-ready closure",
        "The case closes only after verification, final approval, certificate artifact, and evidence manifest hash exist.",
    )
    shadowed_panel(draw, (76, 220, 612, 612))
    draw.text((108, 250), "Certificate contents", font=font(29, True), fill=INK)
    cert_items = [
        "Recall ID and faulty component",
        "Blast-radius and changed-outcome counts",
        "DBOM evidence bundle reference",
        "Replay and remediation summaries",
        "Test Cloud verification result",
        "Human approvals and manifest hashes",
    ]
    yy = 312
    for item in cert_items:
        draw.ellipse((112, yy + 7, 128, yy + 23), fill=GREEN)
        draw_wrapped(draw, (144, yy), item, font(20), INK, 390, 4)
        yy += 48
    shadowed_panel(draw, (678, 220, 1192, 612))
    draw.text((712, 250), "Repository evidence", font=font(30, True), fill=INK)
    repo_items = [
        "MIT license and setup instructions",
        "UiPath components and Cloud evidence",
        "Coded agents and Agent Builder contracts",
        "Full BPMN process model",
        "Screenshots, deck, coding-agent evidence",
    ]
    yy = 312
    for item in repo_items:
        draw.ellipse((716, yy + 7, 732, yy + 23), fill=TEAL)
        draw.text((748, yy), item, font=font(21), fill=MUTED)
        yy += 44
    image.save(path)


def slide_close(path: Path) -> None:
    image, draw = base_slide(
        "RecallOS closes the loop",
        "Find the affected decisions. Explain them. Freeze risk. Replay safely. Keep humans in control. Remediate. Verify. Certify.",
    )
    shadowed_panel(draw, (110, 250, 1170, 550))
    draw.text((154, 296), "Public repo", font=font(24, True), fill=INK)
    draw.text((154, 334), "https://github.com/xiaodouzi666/RecallOS", font=font(24), fill=BLUE)
    draw.text((154, 398), "Hosted Control Tower", font=font(24, True), fill=INK)
    draw.text((154, 436), "https://xiaodouzi666.github.io/RecallOS/control-tower/", font=font(24), fill=BLUE)
    draw.text((154, 500), "Track: UiPath Maestro Case", font=font(24, True), fill=GREEN)
    image.save(path)


def make_slides() -> list[tuple[Path, float]]:
    slide_dir = BUILD / "slides"
    slide_dir.mkdir(parents=True, exist_ok=True)
    slides = [
        ("01_title.png", slide_title, 16.0),
        ("02_problem.png", slide_problem, 24.0),
        ("03_architecture.png", slide_architecture, 26.0),
        ("04_uipath.png", slide_uipath, 24.0),
        ("05_validation.png", slide_validation, 28.0),
        ("06_human_loops.png", slide_human_loops, 28.0),
        ("07_certificate.png", slide_certificate, 32.0),
    ]
    paths: list[tuple[Path, float]] = []
    for filename, maker, duration in slides:
        path = slide_dir / filename
        maker(path)
        paths.append((path, duration))
    return paths


def ensure_control_video() -> None:
    expected = Path.home() / "Library" / "Caches" / "ms-playwright" / "ffmpeg-1011" / "ffmpeg-mac"
    expected.parent.mkdir(parents=True, exist_ok=True)
    if not expected.exists():
        expected.symlink_to(FFMPEG)

    env = os.environ.copy()
    env["NODE_PATH"] = NODE_PATH
    run([NODE, ROOT / "scripts" / "capture_control_tower_video.js", CONTROL_WEBM], env=env)


def synthesize_narration() -> float:
    NARRATION_TEXT.write_text(textwrap.dedent(NARRATION).strip() + "\n", encoding="utf-8")
    BUILD.mkdir(parents=True, exist_ok=True)
    run(["say", "-v", "Daniel", "-r", "175", "-f", NARRATION_TEXT, "-o", NARRATION_AUDIO])
    return media_duration(NARRATION_AUDIO)


def render_slide_segment(image_path: Path, duration: float, out_path: Path) -> None:
    run(
        [
            FFMPEG,
            "-y",
            "-loop",
            "1",
            "-framerate",
            str(FPS),
            "-t",
            f"{duration:.2f}",
            "-i",
            image_path,
            "-vf",
            f"scale={WIDTH}:{HEIGHT},format=yuv420p",
            "-r",
            str(FPS),
            "-c:v",
            "libx264",
            "-preset",
            "veryfast",
            "-crf",
            "18",
            "-pix_fmt",
            "yuv420p",
            out_path,
        ]
    )


def render_clip_segment(input_path: Path, out_path: Path) -> None:
    run(
        [
            FFMPEG,
            "-y",
            "-i",
            input_path,
            "-vf",
            f"scale={WIDTH}:{HEIGHT}:force_original_aspect_ratio=decrease,pad={WIDTH}:{HEIGHT}:(ow-iw)/2:(oh-ih)/2,format=yuv420p",
            "-r",
            str(FPS),
            "-c:v",
            "libx264",
            "-preset",
            "veryfast",
            "-crf",
            "18",
            "-pix_fmt",
            "yuv420p",
            out_path,
        ]
    )


def concat_segments(segment_paths: list[Path], out_path: Path) -> None:
    concat_file = BUILD / "concat.txt"
    concat_file.write_text(
        "".join(f"file '{path.as_posix()}'\n" for path in segment_paths),
        encoding="utf-8",
    )
    run(
        [
            FFMPEG,
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            concat_file,
            "-c:v",
            "libx264",
            "-preset",
            "veryfast",
            "-crf",
            "18",
            "-pix_fmt",
            "yuv420p",
            out_path,
        ]
    )


def mux_audio(video_path: Path, audio_path: Path, out_path: Path) -> None:
    run(
        [
            FFMPEG,
            "-y",
            "-i",
            video_path,
            "-i",
            audio_path,
            "-map",
            "0:v:0",
            "-map",
            "1:a:0",
            "-c:v",
            "copy",
            "-c:a",
            "aac",
            "-b:a",
            "160k",
            "-shortest",
            out_path,
        ]
    )


def main() -> None:
    if not FFMPEG.exists():
        raise SystemExit(f"ffmpeg not found: {FFMPEG}")
    if not NODE.exists():
        raise SystemExit(f"node not found: {NODE}")

    if BUILD.exists():
        shutil.rmtree(BUILD)
    BUILD.mkdir(parents=True, exist_ok=True)

    audio_duration = synthesize_narration()
    ensure_control_video()
    control_duration = media_duration(CONTROL_WEBM)
    slides = make_slides()

    base_duration = sum(duration for _, duration in slides[:4]) + control_duration + sum(duration for _, duration in slides[4:])
    close_duration = max(10.0, audio_duration + 1.5 - base_duration)
    close_path = BUILD / "slides" / "08_close.png"
    slide_close(close_path)

    ordered: list[tuple[str, Path, float | None]] = [
        ("slide", slides[0][0], slides[0][1]),
        ("slide", slides[1][0], slides[1][1]),
        ("slide", slides[2][0], slides[2][1]),
        ("slide", slides[3][0], slides[3][1]),
        ("clip", CONTROL_WEBM, None),
        ("slide", slides[4][0], slides[4][1]),
        ("slide", slides[5][0], slides[5][1]),
        ("slide", slides[6][0], slides[6][1]),
        ("slide", close_path, close_duration),
    ]

    segments: list[Path] = []
    for index, (kind, source, duration) in enumerate(ordered, start=1):
        out_path = BUILD / f"segment_{index:02d}.mp4"
        if kind == "slide":
            render_slide_segment(source, float(duration), out_path)
        else:
            render_clip_segment(source, out_path)
        segments.append(out_path)

    no_audio = BUILD / "recallos_demo_no_audio.mp4"
    concat_segments(segments, no_audio)
    mux_audio(no_audio, NARRATION_AUDIO, FINAL_VIDEO)

    final_duration = media_duration(FINAL_VIDEO)
    final_info = capture_output([FFMPEG, "-i", FINAL_VIDEO])
    print("\nFinal video:", FINAL_VIDEO)
    print(f"Duration: {final_duration:.2f} seconds")
    print(f"Narration duration: {audio_duration:.2f} seconds")
    print(f"Control Tower recording: {control_duration:.2f} seconds")
    print("Audio stream present:", "Audio:" in final_info)
    if final_duration > 300:
        raise SystemExit("Final video exceeds 5 minutes")
    if "Audio:" not in final_info:
        raise SystemExit("Final video has no audio stream")


if __name__ == "__main__":
    main()
