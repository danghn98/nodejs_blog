const mongoose = require("mongoose")
const slug = require("mongoose-slug-generator")

mongoose.plugin(slug)

const Schema = mongoose.Schema

const Course = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "title", unique: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Course", Course)
