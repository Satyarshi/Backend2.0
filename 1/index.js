const path = require("path");

// console.log(path.sep); ---> \

// console.log(process.env.PATH);

// console.log(path.delimiter); ---> ;

const filePath = "public_html/home/index.html";
// console.log(path.basename(filePath));  ---> index.html

const currentFilePath = __filename;
// console.log(currentFilePath); ---> C:\D-drive\Dekstop\Backend2.0\1\index.js

// console.log(path.basename(currentFilePath));  ---> index.js

const basenameWithoutExt = path.basename(currentFilePath, ".js");
// console.log(basenameWithoutExt); ---> index

const dirName = path.dirname(currentFilePath);
// console.log(dirName); ---> C:\D-drive\Dekstop\Backend2.0\1

// console.log(path.extname(currentFilePath)); ---> .js

let pathToFile = path.format({
  dir: "/public_html/home",
  base: "index.html",
});

// console.log(pathToFile);  ---> /public_html/home\index.html

// console.log(path.isAbsolute(currentFilePath));  ---> true
// console.log(path.isAbsolute("/index.js")); ---> true
// console.log(path.isAbsolute("./index.html")); ---> false
// console.log(path.isAbsolute("../index.html")); ---> false

let pathToDir = path.join("/home", "dist", "index.js");
// console.log(pathToDir); ---> \home\dist\index.js

// console.log(path.parse(currentFilePath)); 
// {
//     root: 'C:\\',
//     dir: 'C:\\D-drive\\Dekstop\\Backend2.0\\1',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   } 

// path.format is just opposite of path.parse
