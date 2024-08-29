const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const route = require('./routes/index');

// EXPRESS JS
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
); // -> middleware xử lí cho form
app.use(express.json()); // -> middleware xử lí cho fect, axios,...
// http://localhost:3000/img/logo.png
const port = 3000;

// HTTP LOGGER
app.use(morgan("combined"));

// HANDLEBARS
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

// Định nghĩa route

route(app);

// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("/news", (req, res) => {
//   res.render("news");
// });

// app.get("/search", (req, res) => {
//   console.log(req.query.q);
//   res.render("search");
// });

// app.post("/search", (req, res) => {
//   // middleware là thành phần đứng giữa browser và controller trong MVC
//   // expressjs tích hợp sẵn middleware để xử lí query param
//   // nhưng không được tích hợp trong body

//   console.log(req.body);
//   res.send("");
// });

// req(est): chứa các thông tin cơ bản của một httpRequest (path, method,...) do client gửi
// res(sponse): chứa những thông tin mà server trả về cho client sau khi xử lí request đó

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
