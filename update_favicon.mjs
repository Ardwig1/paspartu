import fs from 'fs';
import path from 'path';

const sourceFile = 'c:\\Users\\Mustafa Yağız ÜNAL\\.gemini\\antigravity\\brain\\aeafdbb0-d059-4eba-872c-18ac443f15c6\\media__1770821894312.png';
const destFile = 'c:\\Users\\Mustafa Yağız ÜNAL\\.gemini\\antigravity\\scratch\\paspartu\\public\\favicon.png';

try {
    fs.copyFileSync(sourceFile, destFile);
    console.log(`Copied new favicon to ${destFile}`);
} catch (err) {
    console.error("Error copying favicon:", err);
}
