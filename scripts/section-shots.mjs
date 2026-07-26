import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.AUDIT_URL ?? "http://localhost:3001";
const OUT = "audit/sections";
mkdirSync(OUT, { recursive: true });

const sizes = [
  { name: "390", width: 390, height: 844, touch: true },
  { name: "768", width: 768, height: 1024, touch: true },
  { name: "1024", width: 1024, height: 768, touch: true },
  { name: "1440", width: 1440, height: 900, touch: false },
  { name: "2560", width: 2560, height: 1440, touch: false },
];

const sections = ["work", "about", "services", "process", "benefits", "faq", "contact"];

const browser = await chromium.launch();

for (const s of sizes) {
  const context = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    hasTouch: s.touch,
    isMobile: s.touch && s.width < 900,
    reducedMotion: "reduce",
    colorScheme: "dark",
  });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  for (const id of sections) {
    const el = page.locator(`#${id}`);
    if (!(await el.count())) continue;
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(250);
    await el.screenshot({ path: `${OUT}/${id}-${s.name}.png` });
  }

  console.log(`captured ${s.name}`);
  await context.close();
}

await browser.close();
