const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const db = require("./config/db");

const route = require("./routes/index");

// Connect to MongoDB
db.connect();

// EXPRESS JS
const app = express();
// middleware
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
); // -> middleware xử lí cho form
app.use(express.json()); // -> middleware xử lí cho fect, axios,...
// http://localhost:3000/img/logo.png
const port = 3000;

// HỌC VỀ MIDDLEWARE
// Tất cả function phía sau /middleware đều có thể là middleware
// => functino đầu tiên là middleware check
// Những function trong app.use là middleware (cho tất cả các route)
// app.use bao gồm tất cả các loại method (get, post, put, delete,...) và không cần
// định nghĩa path, nếu có path thì chỉ áp dụng cho path đó
// dùng middleware để check login, check admin, check token, check quyền truy cập,... cho
// cả ứng dụng (authen, author, permission)

app.get(
  "/middleware",
  function (req, res, next) {
    if (req.query.admin === "true") {
      req.token = "admin";
      next();
      // next đẩy sang middleware tiếp theo khi thỏa điều kiện
      // http://localhost:3000/middleware?admin=true
      return;
    }
    res.status(403).json({
      message: "You are not admin",
    });
  },
  function (req, res, next) {
    res.json({
      message: "Hello: " + req.token,
    });
  }
);

// HTTP LOGGER
app.use(morgan("combined"));

// HANDLEBARS
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
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
