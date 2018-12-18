const fs = require('fs')
function getCodeFiles (e) {
  const code = {}
  if (fs.existsSync(__dirname + `/views/oar/${e}/index.html`)) {
    code.HTML = fs.readFileSync(__dirname + `/views/oar/${e}/index.html`)
  }
  if (fs.existsSync(__dirname + `/views/oar/${e}/scripts.js`)) {
    code.JS = fs.readFileSync(__dirname + `/views/oar/${e}/scripts.js`)
  }
  if (fs.existsSync(__dirname + `/views/oar/${e}/styles.css`)) {
    code.CSS = fs.readFileSync(__dirname + `/views/oar/${e}/styles.css`)
  }
  if (fs.existsSync(__dirname + `/views/oar/${e}/_styles.scss`)) {
    code.SASS = fs.readFileSync(__dirname + `/views/oar/${e}/_styles.scss`)
  }
  console.log('Code:-'+ code.CSS)
  return code;
}

module.exports = {getCodeFiles};