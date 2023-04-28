const Cource = require("./models/Course")

class SiteController {
  // [GET] /
  index(req, res) {
    Cource.find({}, function () {
      if (!err) res.json(cource)
      res.status(400).json({ error: "Error!!!" })
    })
    // res.render("home")
  }

  // [GET] /search
  search(req, res) {
    res.render("search")
  }
}

module.exports = new SiteController()
