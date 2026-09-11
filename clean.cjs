const fs = require('fs');
const path = require('path');

function cleanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      cleanDir(fullPath);
    } else if (/\.(js|jsx)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.indexOf('\\"') !== -1) {
        content = content.split('\\"').join('"');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Cleaned:', fullPath);
      }
    }
  }
}

cleanDir(path.join(__dirname, 'src'));
console.log('Clean complete');
