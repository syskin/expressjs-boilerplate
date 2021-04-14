const User = require(`./userModel.js`);

const createUser = async (info) => {
  try {
    const user = new User(info);
    const newUser = await user.save(info);
    return newUser;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  createUser,
};
