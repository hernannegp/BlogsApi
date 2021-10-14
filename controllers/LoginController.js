const loginServices = require('../services/LoginServices');

const Login = async (req, res) => {
  const loginJWT = await loginServices.Login(req.body);
  return res.status(200).json(loginJWT.token);
};

module.exports = {
  Login,
};