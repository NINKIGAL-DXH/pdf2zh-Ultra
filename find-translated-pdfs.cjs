const fs = require('fs');
const path = require('path');
const os = require('os');
let pdf2zhDataDir = process.env.APP_DATA_DIR || path.join(os.homedir(), ".pdf2zh_gui_workspace");
if (!fs.existsSync(pdf2zhDataDir)) {
    pdf2zhDataDir = path.join(os.tmpdir(), ".pdf2zh_gui_workspace");
}
function listPdfs(dir) {
    if (fs.existsSync(dir)) {
        return fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));
    }
    return [];
}
console.log("pdf2zhDataDir:", listPdfs(pdf2zhDataDir));
console.log("pdf2zhDataDir/uploads:", listPdfs(path.join(pdf2zhDataDir, "uploads")));
