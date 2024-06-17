const http = require("http");

const options = {
  hostname: "fakestoreapi.com",
  path: "/products/1",
  method: "GET",
};

const req = http.request(options, (res) => {
  res.on("data", (data) => {
    console.log(JSON.parse(data.toString())); // data.toString() convert buffer to string and JSON.parse convert it to string
  });
});

req.on("error", () => {
  console.log(e);
});

req.end();
