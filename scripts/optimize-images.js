const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Optimized: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

const processDirectory = async (dir) => {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      await optimizeImage(fullPath, outputPath);
    }
  }
};

const imagesDir = path.join(__dirname, '../public/images');
processDirectory(imagesDir); 