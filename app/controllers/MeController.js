const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    // let courseQuery = Course.find({});

    // Mục đích là đưa chuyển tiếp nó vào view (nhờ thư viện express-handlebars)
    // res.json(res.locals._sort);

    // if (req.query.hasOwnProperty("_sort")) {
    //   const type = ["asc", "desc"].includes(req.query.type)
    //     ? req.query.type
    //     : "desc";

    //   courseQuery = courseQuery.sort({
    //     [req.query.column]: type,
    //   });
    // }

    Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render("me/stored-courses", {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
