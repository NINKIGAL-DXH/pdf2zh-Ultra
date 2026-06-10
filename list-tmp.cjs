const fs = require('fs');
const os = require('os');
const files = fs.readdirSync(os.tmpdir()).filter(f => f.endsWith('.pdf'));
console.log(files);
