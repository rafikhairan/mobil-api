const dbPool = require("../config/database");
const bcrypt = require("bcrypt");

const getUser = (email) => {
  const SQLQuery = `SELECT * FROM users WHERE email='${email}'`;

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  bcrypt.hash(body.password, 10, (err, hash) => {
    const SQLQuery = `INSERT INTO users (nama, email, password) 
                      VALUES ('${body.nama}', '${body.email}', '${hash}')`;

    return dbPool.execute(SQLQuery);
  });
};

module.exports = {
  createNewUser,
  getUser,
};
