const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./files", function (err, files) {
    res.render("index", { files: files });
  });
});

app.post("/create/", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.content,
    function (err) {
      res.redirect("/");
    }
  );
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
    res.render("show", { title: req.params.filename, content: data });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { file: req.params.filename });
});

app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.prevTitle}`,
    `./files/${req.body.newTitle}.txt`,
    function (err) {
      res.redirect("/");
    }
  );
});
app.listen(3000);
