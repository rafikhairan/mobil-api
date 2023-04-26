const dbPool = require("../config/database");

const getAllBrands = () => {
  const SQLQuery = `SELECT * FROM brands`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllBrands,
};
