const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "log4.txt");
console.log(filePath);


if (fs.existsSync(filePath)) {

    fs.appendFile(filePath, `Accessed on ${new Date()}\n`, (err) => {
    if (err) {
      console.error("Error appending to file:", err);
      return;
    }
    console.log("Data appended successfully!");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file:", err);
        return;
      }
      console.log("File content: ", data);
    });
  });
} else {
  fs.writeFile(filePath, "I am just adding this\n", (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    console.log("File created successfully!");
     fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file:", err);
        return;
      }
      console.log("File content: ", data);
    });
  });
}
