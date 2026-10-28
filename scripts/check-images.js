const fs = require('fs');
const path = require('path');

function getWebpDimensions(buf) {
  if (buf.length < 30) return null;
  const riff = buf.toString('ascii', 0, 4);
  const webp = buf.toString('ascii', 8, 12);
  if (riff !== 'RIFF' || webp !== 'WEBP') return null;
  const format = buf.toString('ascii', 12, 16);
  if (format === 'VP8 ') {
    const width = buf.readUInt16LE(26) & 0x3fff;
    const height = buf.readUInt16LE(28) & 0x3fff;
    return { format: 'VP8', width, height };
  } else if (format === 'VP8L') {
    const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
    const width = 1 + (((b1 & 0x3F) << 8) | b0);
    const height = 1 + (((b3 & 0xF) << 10) | (b2 << 2) | ((b1 & 0xC0) >> 6));
    return { format: 'VP8L', width, height };
  } else if (format === 'VP8X') {
    const width = 1 + buf.readUIntLE(24, 3);
    const height = 1 + buf.readUIntLE(27, 3);
    return { format: 'VP8X', width, height };
  }
  return null;
}

function scan(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      scan(p);
    } else if (p.endsWith('.webp')) {
      const buf = fs.readFileSync(p);
      const dims = getWebpDimensions(buf);
      console.log(p.replace(/.*public/, ''), dims ? dims.width + 'x' + dims.height : 'unknown', (buf.length/1024).toFixed(1) + 'KB');
    }
  }
}
scan('public/images');
