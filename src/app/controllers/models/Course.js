const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Cource = new Schema({
  title: { type: String, maxLength: 255 },
  body: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Course", Cource)
