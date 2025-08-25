const { readFile, writeFile } = require("fs");

writeFile("E:/nodepractice1/MyPractice/Data/example.txt", "This is something I'm typing here", (err) => {
  if (err) {
    console.log("Error writing file:", err);
    return;
  }
  console.log(" Write success!");


  readFile("E:/nodepractice1/MyPractice/Data/example.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log(" File content:", data);
  });
});
