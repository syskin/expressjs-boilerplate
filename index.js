const app = require(`./config/express`)
const configVars = require(`./config/environments`)

const env = configVars[process.env.NODE_ENV]

app.listen(env.port, () => {
  console.log(`Server now listening at ${env.baseUrl}:${env.port}`)
})

module.exports = app
