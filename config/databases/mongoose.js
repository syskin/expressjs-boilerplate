const mongoose = require(`mongoose`)
const mongodbOptions = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

mongoose.connect(
  process.env.MONGO_DEV_CONN_URL + process.env.MONGO_DB_NAME,
  mongodbOptions
)
exports.module = {
  mongoose,
}
