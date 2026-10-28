const fs = require('fs');
const sharp = require('sharp');

async function fixStoryNecklace() {
  const original = 'public/images/home/story-necklace.webp';
  const backup = 'public/images/home/story-necklace.webp.bak';
  if (!fs.existsSync(backup)) {
    fs.copyFileSync(original, backup);
  }

  const { data, info } = await sharp(backup).raw().toBuffer({ resolveWithObject: true });
  const w = info.width; // 1451
  const h = info.height; // 1171
  const ch = info.channels;
  const seamX = 1044;

  // We want to replace x from seamX to w-1 with mirrored/blended silk from (seamX - 1) downwards
  // To make it look completely natural, we can take the silk texture from x = seamX - 450 to seamX
  // and blend it across seamX with a feather of 20 pixels.
  const outBuf = Buffer.from(data);

  for (let y = 0; y < h; y++) {
    for (let x = seamX; x < w; x++) {
      const offset = x - seamX;
      // sample from mirrored coordinate
      let srcX = seamX - 1 - offset;
      if (srcX < 300) {
        srcX = 300 + (300 - srcX) % 400;
      }
      
      const dstIdx = (y * w + x) * ch;
      const srcIdx = (y * w + srcX) * ch;

      // soften lighting toward right edge
      const edgeFactor = 1 - (offset / (w - seamX)) * 0.15;

      outBuf[dstIdx] = Math.min(255, Math.floor(data[srcIdx] * edgeFactor));
      outBuf[dstIdx + 1] = Math.min(255, Math.floor(data[srcIdx + 1] * edgeFactor));
      outBuf[dstIdx + 2] = Math.min(255, Math.floor(data[srcIdx + 2] * edgeFactor));
    }

    // Blend seam over 24 pixels
    for (let b = 0; b < 24; b++) {
      const x = seamX - 12 + b;
      if (x >= 0 && x < w) {
        const t = b / 24;
        const leftIdx = (y * w + (seamX - 13)) * ch;
        const rightIdx = (y * w + (seamX + 13)) * ch;
        const idx = (y * w + x) * ch;
        for (let c = 0; c < 3; c++) {
          outBuf[idx + c] = Math.floor(outBuf[leftIdx + c] * (1 - t) + outBuf[rightIdx + c] * t);
        }
      }
    }
  }

  await sharp(outBuf, { raw: { width: w, height: h, channels: ch } })
    .webp({ quality: 92, effort: 6 })
    .toFile(original);

  console.log('Successfully repaired story-necklace.webp');
}

fixStoryNecklace().catch(console.error);
