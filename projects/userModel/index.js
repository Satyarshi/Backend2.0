const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./models/usermodel");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let allUser = await userModel.find();
  res.render("show", { users: allUser });
});

app.post("/create", async (req, res) => {
  let { name, email, img } = req.body;
  let createdUser = await userModel.create({
    name: name,
    email: email,
    image: img,
  });
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let user = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.get("/edit/:id", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.id });
  res.render("edit", { user });
});

app.post("/update/:id", async (req, res) => {
  let { name, email, img } = req.body;
  let user = await userModel.findOneAndUpdate(
    { _id: req.params.id },
    { name, email, image: img },
    { new: true }
  );
  res.redirect("/read");
});

app.listen(3000, () => {
  console.log("server running at port 3000");
});
