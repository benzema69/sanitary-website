/**
 * Image optimization script using sharp.
 * Run: node optimize-images.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const QUALITY = 80;
const MAX_WIDTH = 1920;

const files = fs.readdirSync(IMAGES_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    const tmpPath = filePath + '.tmp';
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

    if (stats.size < 300 * 1024) {
        console.log(`⏭️  ${file} (${sizeMB}MB) — Already small, skipping.`);
        continue;
    }

    console.log(`🔧 Compressing ${file} (${sizeMB}MB)...`);

    try {
        const buffer = await sharp(filePath)
            .resize({ width: MAX_WIDTH, withoutEnlargement: true })
            .jpeg({ quality: QUALITY, mozjpeg: true })
            .toBuffer();

        // Write to temp, then rename (avoids locking issues)
        fs.writeFileSync(tmpPath, buffer);
        fs.unlinkSync(filePath);
        fs.renameSync(tmpPath, filePath);

        const newSize = (buffer.length / 1024 / 1024).toFixed(2);
        console.log(`   ✅ ${file}: ${sizeMB}MB → ${newSize}MB`);
    } catch (err) {
        console.error(`   ❌ ${file}: ${err.message}`);
        // clean up temp file if it exists
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
}

console.log('\n🎉 Done! All images optimized.');
