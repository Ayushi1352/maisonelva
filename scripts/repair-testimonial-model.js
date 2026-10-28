const fs = require('fs');
const sharp = require('sharp');

async function repairTestimonialModel() {
  const original = 'public/images/home/testimonial-model.webp';
  const backup = 'public/images/home/testimonial-model.webp.bak';
  if (!fs.existsSync(backup)) {
    fs.copyFileSync(original, backup);
  }

  const { data, info } = await sharp(backup).raw().toBuffer({ resolveWithObject: true });
  const w = info.width; // 786
  const h = info.height; // 978
  const ch = info.channels; // 3

  const outBuf = Buffer.from(data);

  // Inpaint the region x: 0..96, y: 765..977
  // Notice that to the right of x=90 is burgundy velvet dress:
  // Color of velvet at x=110, y: R ~ 65..120, G ~ 5..20, B ~ 20..35
  // Also her bare shoulder is at y around 765..790: skin tone R ~ 180..200, G ~ 130..150, B ~ 115..135
  // Let's sample horizontally from x = 95 + (95 - x) * 0.7 or mirror/interpolate from x >= 95
  for (let y = 760; y < h; y++) {
    for (let x = 0; x < 105; x++) {
      const idx = (y * w + x) * ch;
      // If it's near white (r > 240, g > 240, b > 240) or close to the cutout edge
      const isWhite = data[idx] > 230 && data[idx + 1] > 230 && data[idx + 2] > 230;
      if (isWhite || (x < 92 && y >= 772)) {
        // Sample from the right where the dress/shoulder extends
        const sampleOffset = 95 + Math.min(100, Math.floor((95 - x) * 0.8));
        const sampleX = Math.min(w - 1, sampleOffset);
        const sampleIdx = (y * w + sampleX) * ch;

        // Add very subtle organic variation to avoid flat repetition
        const noise = (Math.sin(x * 0.3) * Math.cos(y * 0.2)) * 3;

        outBuf[idx] = Math.max(0, Math.min(255, Math.floor(data[sampleIdx] + noise)));
        outBuf[idx + 1] = Math.max(0, Math.min(255, Math.floor(data[sampleIdx + 1] + noise * 0.5)));
        outBuf[idx + 2] = Math.max(0, Math.min(255, Math.floor(data[sampleIdx + 2] + noise * 0.5)));
      }
    }
  }

  // Smooth horizontally and vertically across the seam at x = 90..105
  for (let y = 765; y < h; y++) {
    for (let x = 85; x <= 105; x++) {
      const idx = (y * w + x) * ch;
      let r = 0, g = 0, b = 0, count = 0;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const ny = y + dy;
          const nx = x + dx;
          if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
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

  console.log('Successfully repaired testimonial-model.webp');
}

repairTestimonialModel().catch(console.error);
