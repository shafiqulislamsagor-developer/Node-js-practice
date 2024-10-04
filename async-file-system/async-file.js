const fs = require("fs");

// read files to text ... asynchronously

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("error reading text file");
  }
  //   console.log(data);
  //   write file to text ... asynchronously
  fs.writeFile("./texts/write.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("error writing text file");
    }
  });
});

console.log("asyncronously loaded works");
