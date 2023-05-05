const mongoose = require("mongoose")
const slug = require("mongoose-slug-generator")
const mongooseDelete = require("mongoose-delete")

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

mongoose.plugin(slug)
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" })

module.exports = mongoose.model("Course", Course)
