const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const repoRoot = path.resolve(__dirname, "..");
  const outputPath = path.resolve(
    process.argv[2] || path.join(repoRoot, "..", "outputs", "video-build", "control-tower.webm"),
  );
  const recordDir = path.dirname(outputPath);
  fs.mkdirSync(recordDir, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: recordDir, size: { width: 1280, height: 720 } },
  });

  const page = await context.newPage();
  await page.goto("file://" + path.join(repoRoot, "app", "index.html"));
  await page.waitForLoadState("load");
  await wait(3500);

  await page.locator(".workspace").scrollIntoViewIfNeeded();
  await wait(1500);

  const tabs = [
    ["Blast Radius", 4500],
    ["DBOM", 6500],
    ["Replay Results", 6500],
    ["Risk & Exposure", 5500],
    ["Remediation Plan", 6500],
    ["Evidence Chain", 5500],
    ["Human Review", 6500],
    ["Certificate", 7500],
  ];

  for (const [tab, delay] of tabs) {
    await page.getByRole("button", { name: tab, exact: true }).click();
    await wait(delay);
    if (tab === "Certificate") {
      await page.mouse.wheel(0, 420);
      await wait(2500);
    }
  }

  const video = page.video();
  await page.close();
  await context.close();
  await browser.close();

  const rawPath = await video.path();
  if (fs.existsSync(outputPath)) {
    fs.rmSync(outputPath);
  }
  fs.renameSync(rawPath, outputPath);
  console.log(outputPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
