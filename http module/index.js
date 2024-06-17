const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hello World</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>About Page</h1>");
  } else {
    res.write("<h1>Page Not Found</h1>");
    
  }
});

server.listen(3000);
console.log("Server is listening on port 3000");
