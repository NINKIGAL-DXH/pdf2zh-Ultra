const fs = require('fs');
const path = require('path');
const os = require('os');
const dirs = [
  os.homedir(),
  os.tmpdir(),
  process.cwd()
];
function findPDFs(dir) {
    let results = [];
    try {
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            let fullPath = path.join(dir, file);
            let stat = fs.statSync(fullPath);
            if (stat && stat.isDirectory()) {
                if (!file.includes("node_modules") && !file.includes(".git")) {
                   results = results.concat(findPDFs(fullPath));
                }
            } else if (file.endsWith('.pdf')) {
                results.push(fullPath);
            }
        });
    } catch (e) {}
    return results;
}
dirs.forEach(d => {
   console.log("PDFs in", d, findPDFs(d).slice(0, 10));
});
