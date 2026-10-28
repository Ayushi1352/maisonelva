const fs = require('fs');
const sharp = require('sharp');

async function healJewelleryGuide() {
  const original = 'public/images/blog/jewellery-guide.webp';
  const backup = 'public/images/blog/jewellery-guide.webp.bak';
  if (!fs.existsSync(backup)) {
    fs.copyFileSync(original, backup);
  }

  const { data, info } = await sharp(backup).raw().toBuffer({ resolveWithObject: true });
  const w = info.width; // 1022
  const h = info.height; // 608
  const ch = info.channels;

  const outBuf = Buffer.from(data);

  // Gray smudge block is at x: 865..1021, y: 0..55
  // We interpolate from the clean wall at y = 60..100 upwards
  for (let y = 0; y <= 55; y++) {
    for (let x = 865; x < w; x++) {
      const idx = (y * w + x) * ch;

      // Sample clean wall at y: 65 + (55 - y) * 0.4
      const sampleY = Math.min(100, Math.floor(65 + (55 - y) * 0.4));
      const sampleIdx = (sampleY * w + x) * ch;

      // Feather on left edge (x: 865..890)
      const featherLeft = Math.min(1, Math.max(0, (x - 865) / 25));
      // Feather on bottom edge (y: 40..55)
      const featherBot = Math.min(1, Math.max(0, (55 - y) / 15));

      const weight = featherLeft * featherBot;

      for (let c = 0; c < 3; c++) {
        outBuf[idx + c] = Math.round(data[sampleIdx + c] * weight + data[idx + c] * (1 - weight));
      }
    }
  }

  // Soft blur over the patch to ensure smooth wall finish
  for (let y = 0; y <= 58; y++) {
    for (let x = 865; x < w; x++) {
      const idx = (y * w + x) * ch;
      let r = 0, g = 0, b = 0, count = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const ny = y + dy;
          const nx = x + dx;
          if (ny >= 0 && ny < h && nx >= 865 && nx < w) {
            const nidx = (ny * w + nx) * ch;
            r += outBuf[nidx];
            g += outBuf[nidx + 1];
            b += outBuf[nidx + 2];
            count++;
          }
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

  console.log('Successfully healed jewellery-guide.webp');
}

healJewelleryGuide().catch(console.error);
