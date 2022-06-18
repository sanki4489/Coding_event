const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const fetchuser = (req, res, next) => {
  // check request header
  const token = req.header("authtoken");
  if (!token) {
    res
      .status(401)
      .json({ error: "Please authenticate using valid credentials" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Please authenticate using valid credentials" });
  }
};

module.exports = fetchuser;
