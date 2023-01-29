const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied!");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = verified;

    next();
  } catch (err) {
    // console.log(err);
    res.status(400).send("Invalid token");
  }
}

module.exports = auth;