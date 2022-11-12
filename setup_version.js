const { writeFileSync } = require("fs");
const version = process.argv.pop();
const data = require("./package.json");
data.version = version;
writeFileSync("./package.json", JSON.stringify(data, null, "  "));
