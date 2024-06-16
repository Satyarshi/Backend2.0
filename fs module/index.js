const fs = require("fs");

// -> Assynchronous way to read file -> there all async and sync both ways for reading,writing and appending file

// console.log("start reading a file...");

fs.readFile("input.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("end reading a file...");
  console.log(data.toString());
});
console.log("Ohter task...");

// -> Synchronous way to read file

let data = fs.readFileSync("input.txt");
console.log(data.toString());

// -> Reading file in low level api

// Read = Open + Read + Close -> this methods provides more control over the file system

const buff = Buffer.alloc(1024);
fs.open("input.txt", "r+", (err, fd) => {
  if (err) {
    console.log("Error in opening file");
  }
  console.log("File opened successfully");
  fs.read(fd, buff, 0, buff.length, 0, (err, bytes) => {
    if (err) {
      console.log("Error in reading file");
    }
    console.log(buff.slice(0, bytes).toString());
  });

  fs.close(fd, (err) => {
    if (err) {
      console.log("Error in closing file");
    } else {
      console.log("File closed successfully");
    }
  });
});

// -> Assynchronous way to write a file

fs.writeFile("input.txt", "Hello World", (err) => {
  if (err) {
    console.log("Error in writing file");
  }
  console.log("File written successfully");
});

// -> Assynchronous way to append a file

fs.appendFile("input.txt", "\nNamaste Duniya", (err) => {
  if (err) {
    console.log("Error in appending file");
  }
  console.log("File appended successfully");
});

// -> Deleting a file

fs.unlink("input.txt", (err) => {
  if (err) {
    console.log("Error in deleting file");
  }
  console.log("File deleted successfully");
});
