import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.AUDIT_URL ?? "http://localhost:3001";
const OUT = "audit";

const viewports = [
  { name: "320-mobile-small", width: 320, height: 640, dsf: 2, touch: true },
  { name: "360-android", width: 360, height: 800, dsf: 3, touch: true },
  { name: "375-iphone-se", width: 375, height: 667, dsf: 2, touch: true },
  { name: "390-iphone-13", width: 390, height: 844, dsf: 3, touch: true },
  { name: "430-iphone-16-pro-max", width: 430, height: 932, dsf: 3, touch: true },
  { name: "412-pixel", width: 412, height: 915, dsf: 2.6, touch: true },
  { name: "480-foldable-cover", width: 480, height: 900, dsf: 3, touch: true },
  { name: "540-galaxy-s24-ultra", width: 540, height: 1170, dsf: 3, touch: true },
  { name: "744-ipad-mini", width: 744, height: 1133, dsf: 2, touch: true },
  { name: "768-tablet-portrait", width: 768, height: 1024, dsf: 2, touch: true },
  { name: "834-ipad-air", width: 834, height: 1194, dsf: 2, touch: true },
  { name: "1024-ipad-pro-landscape", width: 1024, height: 768, dsf: 2, touch: true },
  { name: "1280-surface-pro", width: 1280, height: 800, dsf: 1.5, touch: true },
  { name: "1440-macbook-air", width: 1440, height: 900, dsf: 2, touch: false },
  { name: "1728-macbook-pro", width: 1728, height: 1117, dsf: 2, touch: false },
  { name: "1920-desktop", width: 1920, height: 1080, dsf: 1, touch: false },
  { name: "2560-qhd", width: 2560, height: 1440, dsf: 1, touch: false },
  { name: "3440-ultrawide", width: 3440, height: 1440, dsf: 1, touch: false },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const problems = [];

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.dsf,
    hasTouch: vp.touch,
    isMobile: vp.touch && vp.width < 900,
    userAgent: vp.touch
      ? devices["iPhone 13"].userAgent
      : undefined,
    reducedMotion: "reduce",
  });

  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);

  const audit = () => page.evaluate(() => {
    const doc = document.documentElement;
    const vw = doc.clientWidth;
    const offenders = [];

    for (const el of document.querySelectorAll("body *")) {
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      // Decorative layers are meant to bleed past the edge; they are clipped.
      const decorative = el.closest(
        ".ambient-glow, .hero-energy, .btn-sweep, canvas",
      );
      if (decorative || el.classList.contains("btn-sweep")) continue;
      const overflowRight = r.right - vw;
      if (overflowRight > 1 || r.left < -1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className?.toString?.() ?? "").slice(0, 90),
          left: Math.round(r.left),
          right: Math.round(r.right),
        });
      }
    }

    // Touch target audit
    const small = [];
    for (const el of document.querySelectorAll(
      "a[href], button, select, input, textarea, [role='button'], [role='checkbox']",
    )) {
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const after = getComputedStyle(el, "::after");
      const hasTapTarget = el.classList.contains("tap-target");
      if ((r.height < 44 || r.width < 44) && !hasTapTarget) {
        small.push({
          tag: el.tagName.toLowerCase(),
          text: (el.textContent ?? "").trim().slice(0, 28),
          w: Math.round(r.width),
          h: Math.round(r.height),
          after: after.content,
        });
      }
    }

    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: vw,
      bodyScrollWidth: document.body.scrollWidth,
      offenders: offenders.slice(0, 8),
      small: small.slice(0, 10),
    };
  });

  const report = await audit();

  const horizontalScroll = report.scrollWidth > report.clientWidth + 1;
  if (horizontalScroll || report.offenders.length || report.small.length) {
    problems.push({ viewport: vp.name, horizontalScroll, ...report });
  }

  await page.screenshot({
    path: `${OUT}/${vp.name}.png`,
    fullPage: false,
  });
  await page.screenshot({
    path: `${OUT}/${vp.name}-full.png`,
    fullPage: true,
  });

  // Fullscreen navigation state
  const burger = page.locator('button[aria-controls="mobile-nav"]:visible');
  if (await burger.count()) {
    await burger.first().click();
    await page.waitForTimeout(450);
    const menu = await audit();
    if (menu.scrollWidth > menu.clientWidth + 1) {
      problems.push({ viewport: `${vp.name} (menu open)`, ...menu });
    }
    await page.screenshot({ path: `${OUT}/${vp.name}-menu.png` });
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
  }

  console.log(
    `${vp.name.padEnd(28)} scroll ${report.scrollWidth}/${report.clientWidth}` +
      `${horizontalScroll ? "  ✗ H-SCROLL" : "  ok"}` +
      `${report.offenders.length ? `  overflow:${report.offenders.length}` : ""}` +
      `${report.small.length ? `  tiny-targets:${report.small.length}` : ""}`,
  );

  await context.close();
}

await browser.close();

console.log("\n──────── DETAIL ────────");
console.log(JSON.stringify(problems, null, 2));
