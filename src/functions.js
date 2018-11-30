const fs = require('fs')
function getCodeFiles (example) {
  const code = {}
  if (fs.existsSync(__dirname + `/views/oar/${example}/index.html`)) {
    code.HTML = fs.readFileSync(__dirname + `/views/oar/${example}/index.html`)
  }
  if (fs.existsSync(__dirname + `/views/oar/${example}/scripts.js`)) {
    code.JS = fs.readFileSync(__dirname + `/views/oar/${example}/scripts.js`)
  }
  if (fs.existsSync(__dirname + `/views/oar/${example}/styles.css`)) {
    code.CSS = fs.readFileSync(__dirname + `/views/oar/${example}/styles.css`)
  }
  if (fs.existsSync(__dirname + `/views/oar/${example}/_styles.scss`)) {
    code.SASS = fs.readFileSync(__dirname + `/views/oar/${example}/_styles.scss`)
  }
  console.log('======== code:-'+ code.CSS)
  return code;
}

module.exports = {getCodeFiles};