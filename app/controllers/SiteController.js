const Course = require("../models/Course");

class SiteController {
  // [GET] /
  async index(req, res) {
    try {
      // Sử dụng async/await để lấy dữ liệu
      const courses = await Course.find({});
      res.render("home", { courses });
    } catch (error) {
      res.status(400).json({ error: "ERROR!!!" });
    }

    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
