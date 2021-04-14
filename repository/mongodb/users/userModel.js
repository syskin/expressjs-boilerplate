const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: `String`,
      trim: true,
    },
    username: {
      type: `String`,
      required: true,
      trim: true,
    },
    password: {
      type: `String`,
      trim: true,
    },
  },
  { collection: `Users` }
);

module.exports = mongoose.model(`Users`, userSchema);
