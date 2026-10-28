const fs = require('fs');
const sharp = require('sharp');

async function healExploreBanner() {
  const original = 'public/images/home/explore-banner.webp';
  const backup = 'public/images/home/explore-banner.webp.bak';

  const { data, info } = await sharp(backup).raw().toBuffer({ resolveWithObject: true });
  const w = info.width; // 3066
  const h = info.height; // 1245
  const ch = info.channels;

  const outBuf = Buffer.from(data);

  // Smudge is x: 0..800, y: 500..1100
  // Clean marble strip is x: 820..1120 (300px wide) at the exact same y coordinates
  const stripWidth = 300;
  const stripStart = 820;

  for (let y = 470; y < 1150; y++) {
    for (let x = 0; x <= 820; x++) {
      const idx = (y * w + x) * ch;

      // Sample symmetrically from clean marble strip
      const distFromBoundary = 820 - x;
      // ping-pong reflection within strip:
      const cycle = distFromBoundary % (2 * stripWidth);
      const offsetInStrip = cycle < stripWidth ? cycle : (2 * stripWidth - 1 - cycle);
      const srcX = stripStart + offsetInStrip;
      const srcIdx = (y * w + srcX) * ch;

      // Feathering at borders
      const featherRight = Math.min(1, Math.max(0, (820 - x) / 50));
      const featherTop = Math.min(1, Math.max(0, (y - 470) / 40));
      const featherBot = Math.min(1, Math.max(0, (1150 - y) / 40));

      const weight = featherRight * featherTop * featherBot;

      for (let c = 0; c < 3; c++) {
        outBuf[idx + c] = Math.round(data[srcIdx + c] * weight + data[idx + c] * (1 - weight));
      }
    }
  }

  // Soft blending filter around the 820 boundary
  for (let y = 470; y < 1150; y++) {
    for (let x = 800; x <= 840; x++) {
      const idx = (y * w + x) * ch;
      let r = 0, g = 0, b = 0, count = 0;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const nidx = ((y + dy) * w + (x + dx)) * ch;
          r += outBuf[nidx];
          g += outBuf[nidx + 1];
          b += outBuf[nidx + 2];
          count++;
        }
      }
      outBuf[idx] = Math.round(r / count);
      outBuf[idx + 1] = Math.round(g / count);
      outBuf[idx + 2] = Math.round(b / count);
    }
  }

  await sharp(outBuf, { raw: { width: w, height: h, channels: ch } })
    .webp({ quality: 95, effort: 6 })
    .toFile(original);

  console.log('Explore banner cleanly restored with continuous marble texture');
}

healExploreBanner().catch(console.error);
