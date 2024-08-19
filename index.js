const express = require("express");
const path = require('path');
const morgan = require("morgan");
const { engine } = require("express-handlebars");

// EXPRESS JS
const app = express();
app.use(express.static(path.join(__dirname, "public")));
// http://localhost:3000/img/logo.png
const port = 3000;

// HTTP LOGGER
app.use(morgan("combined"));

// HANDLEBARS
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

// Định nghĩa route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
