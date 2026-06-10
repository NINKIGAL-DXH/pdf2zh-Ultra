const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), ".pdf2zh_gui_workspace", "uploads");
if (fs.existsSync(p)) {
   console.log("uploads dir exists at", p);
   console.log(fs.readdirSync(p));
} else {
   console.log("uploads dir does not exist at", p);
}
