const app = require(`./config/express`)
const configVars = require(`./config/environments`)
const mongoose = require(`mongoose`)
const mongodb = require(`./config/datasources/mongoose.js`)
const env = configVars[process.env.NODE_ENV]

mongoose.connect(mongodb.uri, mongodb.options)

app.listen(env.port, () => {
  console.log(`Server now listening at ${env.baseUrl}:${env.port}`)
})

module.exports = app
