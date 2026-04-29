const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, 'public', 'anjo-photos');
const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(photosDir);

files.forEach(file => {
  if (file.includes(' ') || file.includes('(') || file.includes(')')) {
    const newName = file.replace(/ /g, '_').replace(/[()]/g, '');
    
    // Rename file
    fs.renameSync(path.join(photosDir, file), path.join(photosDir, newName));
    
    // Replace in all JSX files
    const jsxFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
    jsxFiles.forEach(jsxFile => {
      const jsxPath = path.join(pagesDir, jsxFile);
      let content = fs.readFileSync(jsxPath, 'utf8');
      if (content.includes(file)) {
        content = content.replace(new RegExp(file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newName);
        fs.writeFileSync(jsxPath, content, 'utf8');
      }
    });
    console.log(`Renamed ${file} to ${newName}`);
  }
});
console.log('Done!');
