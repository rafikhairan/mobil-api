const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const timestamp = require("../utils/timestamp");
const catchError = require("../utils/catchError");

const createNewUser = async (req, res) => {
  const { body } = req;
  const [checkUser] = await userModel.getUser(body.email);

  if (checkUser.length === 1) {
    res.status(400).json({
      status: 400,
      message: "Email sudah terdaftar",
    });
  } else {
    try {
      await userModel.createNewUser(body);
      res.status(201).json({
        status: 201,
        timestamp,
        message: "Register berhasil silahkan login untuk dapat menggunakan API",
      });
    } catch (error) {
      res.status(500).json(catchError(timestamp, error));
    }
  }
};

const getUser = async (req, res) => {
  const { body } = req;

  try {
    let [user] = await userModel.getUser(body.email);

    if (user.length === 1) {
      user = user[0];
      bcrypt.compare(body.password, user.password, function (err, result) {
        if (result) {
          jwt.sign(
            {
              nama: user.nama,
              email: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: 60 * 60 },
            (err, token) => {
              res.status(200).json({
                status: 200,
                timestamp,
                message: "Login berhasil",
                token,
              });
            }
          );
        } else {
          res.status(401).json({
            status: 401,
            message: "Password yang anda masukkan salah",
            data: err,
          });
        }
      });
    }
  } catch (error) {
    res.status(500).json(catchError(error));
  }
};

module.exports = {
  createNewUser,
  getUser,
};
