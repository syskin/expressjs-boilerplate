require(`dotenv`).config()
module.exports = {
  uri: process.env.MONGO_DEV_CONN_URL + process.env.MONGO_DB_NAME,
  options: {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
}
