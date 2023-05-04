const Cource = require("./models/Course")
const { multipleMongooseToObject } = require("../../util/mongoose")

class SiteController {
  // [GET] /
  index(req, res, next) {
    // callback
    // Cource.find({}, function (err, course) {
    //   if (!err) res.json(course)
    //   res.status(400).json({ error: "Error!!!" })
    // })

    // promise
    Cource.find()
      .then((courses) => {
        // courses = courses.map((courses) => courses.toObject())
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        })
      })
      .catch(next)
    // res.render("home")
  }

  // [GET] /search
  search(req, res) {
    res.render("search")
  }
}

module.exports = new SiteController()
