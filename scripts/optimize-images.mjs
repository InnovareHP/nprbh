import { readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const PUBLIC = join(process.cwd(), "public");

// [file, maxWidth] — JPEGs re-encoded at q80, PNG logos kept as PNG (palette/quantized)
const jpegs = [
  ["hero-facilities.jpg", 1920],
  ["hero-image-2.jpg", 1920],
  ["hero-image-3.jpg", 1920],
  ["hero-service-2.jpg", 1920],
  ["hero-about-2.jpg", 1920],
];

const pngs = [["facilities/magnolia-logo-3.png", 640]];

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

async function run() {
  for (const [rel, maxW] of jpegs) {
    const p = join(PUBLIC, rel);
    const before = (await stat(p)).size;
    const buf = await sharp(await readFile(p))
      .rotate()
      .resize({ width: maxW, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();
    await writeFile(p, buf);
    console.log(`${rel}: ${kb(before)} -> ${kb(buf.length)}`);
  }
  for (const [rel, maxW] of pngs) {
    const p = join(PUBLIC, rel);
    const before = (await stat(p)).size;
    const buf = await sharp(await readFile(p))
      .resize({ width: maxW, withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toBuffer();
    await writeFile(p, buf);
    console.log(`${rel}: ${kb(before)} -> ${kb(buf.length)}`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
