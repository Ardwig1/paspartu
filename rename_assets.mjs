import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\Mustafa Yağız ÜNAL\\.gemini\\antigravity\\scratch\\paspartu\\public\\assets';

try {
    const files = fs.readdirSync(assetsDir);
    const imageFiles = files.filter(file => file.startsWith('WhatsApp') && (file.endsWith('.jpeg') || file.endsWith('.jpg')));

    console.log(`Found ${imageFiles.length} images to rename.`);

    imageFiles.forEach((file, index) => {
        const oldPath = path.join(assetsDir, file);
        const extension = path.extname(file);
        const newName = `gallery-${index + 1}${extension}`;
        const newPath = path.join(assetsDir, newName);

        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${file} -> ${newName}`);
    });
} catch (err) {
    console.error("Error processing files:", err);
}
