const express = require("express"); // -> import thư viện (là một function)

const app = express(); // -> chạy function (thư viện) -> trả về đối tượng app,
// đại diện cho ứng dụng nodejs
const port = 3000; // -> port

// định nghĩa route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
