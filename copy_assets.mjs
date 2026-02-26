import fs from 'fs';
import path from 'path';

const sourceDir = 'c:\\Users\\Mustafa Yağız ÜNAL\\.gemini\\antigravity\\brain\\aeafdbb0-d059-4eba-872c-18ac443f15c6';
const destDir = 'c:\\Users\\Mustafa Yağız ÜNAL\\.gemini\\antigravity\\scratch\\paspartu\\public\\assets';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = [
    'media__1770820493597.jpg',
    'media__1770820493598.jpg',
    'media__1770820493627.jpg'
];

files.forEach((file, index) => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, `gallery-${index + 1}.jpg`);

    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to gallery-${index + 1}.jpg`);
    } catch (err) {
        console.error(`Error copying ${file}:`, err);
    }
});
