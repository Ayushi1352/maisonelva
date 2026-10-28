const fs = require('fs');
const sharp = require('sharp');

async function cleanTestimonialModel() {
  const original = 'public/images/home/testimonial-model.webp';
  const backup = 'public/images/home/testimonial-model.webp.bak';
  
  const { data, info } = await sharp(backup).raw().toBuffer({ resolveWithObject: true });
  const w = info.width; // 786
  const h = info.height; // 978
  const ch = 3;

  const outBuf = Buffer.from(data);

  // Box to replace: x from 0 to 95, y from 692 to 977
  for (let y = 690; y < h; y++) {
    for (let x = 0; x <= 95; x++) {
      const idx = (y * w + x) * ch;
      // sample from x in 96..180
      const sampleX = 96 + Math.min(80, Math.floor((95 - x) * 0.8));
      const sampleIdx = (y * w + sampleX) * ch;

      outBuf[idx] = data[sampleIdx];
      outBuf[idx + 1] = data[sampleIdx + 1];
      outBuf[idx + 2] = data[sampleIdx + 2];
    }
  }

  // Smooth blur horizontally around the boundary x = 85..105, y = 690..977
  for (let y = 690; y < h; y++) {
    for (let x = 80; x <= 110; x++) {
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

  console.log('Testimonial model fully cleaned and restored');
}

cleanTestimonialModel().catch(console.error);
