const mongoose = require("mongoose")

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log("success")
  } catch (error) {
    console.log("fail", error)
  }
}

module.exports = { connect }
