const fs = require("fs");
const path = require("path");

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else if (filePath.endsWith(".js") || filePath.endsWith(".jsx")) {
      results.push(filePath);
    }
  });

  return results;
}

const files = getFiles("./src");

files.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(/from\s+['"](.*?)['"]/g);

  if (matches) {
    matches.forEach((match) => {
      const importPath = match.match(/['"](.*?)['"]/)[1];

      if (importPath.startsWith(".")) {
        const resolved = path.resolve(path.dirname(file), importPath);

        if (
          !fs.existsSync(resolved) &&
          !fs.existsSync(resolved + ".js") &&
          !fs.existsSync(resolved + ".jsx")
        ) {
          console.log("⚠️ Import problem in:", file);
          console.log("   Missing:", importPath);
          console.log("");
        }
      }
    });
  }
});