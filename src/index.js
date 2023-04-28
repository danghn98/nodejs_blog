const path = require("path")
const express = require("express")
const morgan = require("morgan")
const { engine } = require("express-handlebars")
const db = require("./config/db")

// connect db
db.connect()

const app = express()
const port = 3000

const route = require("./routes")

// add css and image files
app.use(express.static(path.join(__dirname, "public")))

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

// http logger
// app.use(morgan("combined"))

// template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
)
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "resources/views"))

// routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
