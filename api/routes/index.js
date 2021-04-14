const login = require(`./login.js`);

module.exports = (router) => {
  login(router);
  return router;
};
