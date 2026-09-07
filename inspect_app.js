const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const idx = content.indexOf('id="results-view-mycases"');
console.log(content.substring(idx, idx + 4000));
