const dbPool = require("../config/database");

const getAllTypes = () => {
  const SQLQuery = `SELECT * FROM types`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllTypes,
};
