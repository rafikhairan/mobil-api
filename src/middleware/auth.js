require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          status: 403,
          message: "Token yang anda masukkan tidak valid",
        });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({
      status: 401,
      message: "Login terlebih dahulu untuk mendapatkan token",
    });
  }
};

module.exports = auth;
