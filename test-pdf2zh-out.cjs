const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');
const pdfDir = path.join(os.tmpdir(), "pdf_test");
fs.mkdirSync(pdfDir, {recursive: true});
const dummyPdf = path.join(pdfDir, "dummy.pdf");
// Create a completely empty dummy pdf just to see if pdf2zh creates an output structure
const pdfMagic = Buffer.from("%PDF-1.4\n%EOF\n");
fs.writeFileSync(dummyPdf, pdfMagic);

let proc = spawn("pdf2zh", [dummyPdf]);
proc.on('close', () => {
    console.log("CWD files:", fs.readdirSync(process.cwd()));
    console.log("pdfDir files:", fs.readdirSync(pdfDir));
});
