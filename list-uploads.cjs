const fs = require('fs');
const path = require('path');
const os = require('os');
let pdf2zhDataDir = process.env.APP_DATA_DIR || path.join(os.homedir(), ".pdf2zh_gui_workspace");
console.log("pdf2zhDataDir:", pdf2zhDataDir);
if(!fs.existsSync(pdf2zhDataDir)) {
   pdf2zhDataDir = path.join(os.tmpdir(), ".pdf2zh_gui_workspace");
}
console.log("pdf2zhDataDir:", pdf2zhDataDir);
const uploadsDir = path.join(pdf2zhDataDir, "uploads");
console.log("uploadsDir:", uploadsDir);
if (fs.existsSync(uploadsDir)) {
    console.log(fs.readdirSync(uploadsDir));
} else {
    console.log("No uploads dir");
}
