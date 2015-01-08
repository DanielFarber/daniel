var fs = require("fs")

var all = JSON.parse(fs.readFileSync("content.json").toString())
var style = fs.readFileSync("public/stylesheets/style.less").toString()
all.stylesheets.style = style
fs.writeFile("content.json", JSON.stringify(all, undefined, 2))