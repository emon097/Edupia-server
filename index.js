const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const category = require("./data/category.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("course api");
});

app.get("/category", (req, res) => {
  console.log(category);
  res.send(category);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const course = category.find((c) => c.id == id);
  res.send(course);
});
app.listen(port, () => {
  console.log("course", port);
});
module.exports = app;
