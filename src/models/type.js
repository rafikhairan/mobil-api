const dbPool = require("../config/database");

const getAllTypes = () => {
  const SQLQuery = `SELECT * FROM types`;

  return dbPool.execute(SQLQuery);
};

const checkTypeIsExist = (tipe) => {
  const SQLQuery = `SELECT * FROM types WHERE tipe='${tipe}'`;

  return dbPool.execute(SQLQuery);
};

const createType = (tipe) => {
  const SQLQuery = `INSERT INTO types (tipe) VALUE ('${tipe}')`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllTypes,
  checkTypeIsExist,
  createType,
};
