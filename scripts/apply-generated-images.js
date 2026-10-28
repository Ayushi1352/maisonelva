const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\aayus\\.gemini\\antigravity-ide\\brain\\fbe6b89d-097c-414a-b123-fe7160184c2c';

const mappings = [
  {
    src: path.join(brainDir, 'contact_ring_1793180124887.jpg'),
    dest: 'public/images/contact/ring.webp',
    width: 800,
    height: 800
  },
  {
    src: path.join(brainDir, 'contact_pendant_1793180153358.jpg'),
    dest: 'public/images/contact/pendant.webp',
    width: 800,
    height: 800
  },
  {
    src: path.join(brainDir, 'contact_earrings_1793180185466.jpg'),
    dest: 'public/images/contact/earrings.webp',
    width: 800,
    height: 800
  },
  {
    src: path.join(brainDir, 'aurora_bracelet_1793180216192.jpg'),
    dest: 'public/images/collections/aurora-golden-bracelet.webp',
    width: 1000,
    height: 750
  },
  {
    src: path.join(brainDir, 'bloom_bracelet_1793180247569.jpg'),
    dest: 'public/images/collections/bloom-golden-bracelet.webp',
    width: 1000,
    height: 750
  },
  {
    src: path.join(brainDir, 'velvet_bracelet_1793180288365.jpg'),
    dest: 'public/images/collections/velvet-golden-bracelet.webp',
    width: 1000,
    height: 750
  },
  {
    src: path.join(brainDir, 'halo_thumb_one_1793180325706.jpg'),
    dest: 'public/images/collections/radiant-halo-thumb-1.webp',
    width: 600,
    height: 600
  },
  {
    src: path.join(brainDir, 'halo_thumb_two_1793180355631.jpg'),
    dest: 'public/images/collections/radiant-halo-thumb-2.webp',
    width: 600,
    height: 600
  },
  {
    src: path.join(brainDir, 'halo_thumb_three_1793180383780.jpg'),
    dest: 'public/images/collections/radiant-halo-thumb-3.webp',
    width: 600,
    height: 600
  },
  {
    src: path.join(brainDir, 'halo_thumb_four_1793180436936.jpg'),
    dest: 'public/images/collections/radiant-halo-thumb-4.webp',
    width: 600,
    height: 600
  },
  {
    src: path.join(brainDir, 'halo_model_1793180481270.jpg'),
    dest: 'public/images/collections/radiant-halo-model.webp',
    width: 1200,
    height: 900
  },
  {
    src: path.join(brainDir, 'mission_rings_1793180518957.jpg'),
    dest: 'public/images/about/mission-rings.webp',
    width: 768,
    height: 1024
  }
];

async function applyImages() {
  for (const m of mappings) {
    if (!fs.existsSync(m.src)) {
      console.error('Missing source:', m.src);
      continue;
    }
    // backup original if not backed up
    const backupPath = m.dest + '.bak';
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(m.dest, backupPath);
    }
    await sharp(m.src)
      .resize(m.width, m.height, { fit: 'cover' })
      .webp({ quality: 92, effort: 6 })
      .toFile(m.dest);
    console.log('Successfully updated:', m.dest);
  }
}

applyImages().catch(err => {
  console.error(err);
  process.exit(1);
});
