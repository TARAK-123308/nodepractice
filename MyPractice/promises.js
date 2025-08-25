const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "data", "log8.txt");

fs.access(filePath)
  .then(() => fs.appendFile(filePath, `Accessed on ${new Date()}\n`))
  .catch(() => fs.writeFile(filePath, `Created on ${new Date()}\n`))
  .then(() => fs.readFile(filePath, "utf-8"))
  .then((data) => console.log("File content:\n" + data))
  .catch((err) => console.error("Error:", err));
