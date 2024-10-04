const fs = require("fs");

//  reading a file text

const readText = fs.readFileSync("./texts/read.txt", "utf8");

// console.log(readText);

// write a file text

const writeText = fs.writeFileSync(
  "./texts/write.txt",
  readText + "this is my text!"
);

// console.log(writeText);
