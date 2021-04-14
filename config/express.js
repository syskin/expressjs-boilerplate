const express = require(`express`)
const compression = require(`compression`)
const bodyParser = require(`body-parser`)
const helmet = require(`helmet`)
const logger = require(`morgan`)
const { handleError } = require(`../api/middleware/errorHandler`)
const routes = require(`../api/routes/index.js`)
const app = express()
const router = express.Router()

app.use(bodyParser.json({ limit: `5mb` }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(`/`, routes(router))
app.use(compression())
app.use(logger(`dev`))
app.use(helmet())

//Middleware
app.use((err, req, res, next) => {
  handleError(err, res)
})

module.exports = app
