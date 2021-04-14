const loginController = require(`../controllers/login`);

module.exports = (router) => {
  router.route(`/login`).post(loginController);
};
