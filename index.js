const express = require("express"); // -> import thư viện (là một function)
const morgan = require("morgan");

const app = express(); // -> chạy function (thư viện) -> trả về đối tượng app,
// đại diện cho ứng dụng nodejs
const port = 3000; // -> port

app.use(morgan("combined"));

// định nghĩa route
app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
