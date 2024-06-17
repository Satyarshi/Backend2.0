const http = require("http");
const { hostname } = require("os");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>Namaste Duniya</h1>");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is about page</h1>");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("This is contact page");
    res.end();
  } else if (req.url === "/products") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };
    const apiReq = http.request(options, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data.toString());
      });
    });
    apiReq.on("error", () => {
      console.log("Server error");
    });
    apiReq.end(); // ending the server is compulsory
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Server Error" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

/*
--------------------------------------------------------------------------------------------------
res.statusCode = 500;
res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify({ error: "Server Error" }));

-> jab bhi server se client pe data bhejengay to wo ya to binary form me hoga ya string me therefor json send karne ke liye json.Stringfy use kara taki string me convert ho jaye

-----------------------------------------------------------------------------------------------------
read the docs in readme
*/
