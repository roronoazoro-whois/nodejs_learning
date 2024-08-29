const Course = require("../models/Course");

const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  async index(req, res) {
    try {
      // Sử dụng async/await để lấy dữ liệu
      let courses = await Course.find({});
      // courses = courses.map((course) => course.toObject());
      res.render("home", {
        courses: mutipleMongooseToObject(courses),
      });
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
