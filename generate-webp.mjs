/**
 * WebP conversion script — generates .webp alongside existing .jpg
 * Run: node generate-webp.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, 'public', 'images');

const files = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace(/\.\w+$/, '.webp'));

    if (fs.existsSync(outputPath)) {
        console.log(`⏭️  ${file} → .webp already exists, skipping`);
        continue;
    }

    const inputSize = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);
    console.log(`🔧 Converting ${file} (${inputSize}MB)...`);

    const buffer = fs.readFileSync(inputPath);
    const webpBuffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();
    fs.writeFileSync(outputPath, webpBuffer);

    const outputSize = (webpBuffer.length / 1024 / 1024).toFixed(2);
    console.log(`   ✅ ${file} → .webp: ${inputSize}MB → ${outputSize}MB`);
}

console.log('\n🎉 WebP conversion complete!');
