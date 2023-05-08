const dbPool = require("../config/database");

const getCars = (queryParams) => {
  const params = Object.keys(queryParams);
  if (params.length == 0) {
    const SQLQuery = `SELECT cars.id, cars.nama_mobil, cars.transmisi, cars.tenaga, cars.kapasitas_mesin, types.tipe FROM cars JOIN types ON cars.id_tipe = types.id ORDER BY cars.id`;

    return dbPool.execute(SQLQuery);
  } else {
    let condition = "";
    params.forEach((param) => {
      if (param == "nama_mobil") {
        condition += `${param} LIKE '%${queryParams[param]}%' AND `;
      } else {
        condition += `${param}='${queryParams[param]}' AND `;
      }
    });

    condition = condition.slice(0, -5);

    const SQLQuery = `SELECT cars.id, cars.nama_mobil, cars.transmisi, cars.tenaga, cars.kapasitas_mesin, types.tipe FROM cars JOIN types ON cars.id_tipe = types.id WHERE ${condition} ORDER BY cars.id`;

    return dbPool.execute(SQLQuery);
  }
};

const addNewCar = (body) => {
  const SQLQuery = `INSERT INTO cars (id_tipe, nama_mobil, transmisi, tenaga, kapasitas_mesin) 
                    VALUES (${body.id_tipe}, '${body.nama_mobil}', '${body.transmisi}', '${body.tenaga}', '${body.kapasitas_mesin}')`;

  return dbPool.execute(SQLQuery);
};

const updateCar = (id, body) => {
  let set = "";
  const params = Object.keys(body);
  params.forEach((param) => {
    set += `${param}='${body[param]}', `;
  });

  set = set.slice(0, -2);

  const SQLQuery = `UPDATE cars 
                    SET ${set}
                    WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

const deleteCar = (id) => {
  const SQLQuery = `DELETE FROM cars WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getCars,
  addNewCar,
  updateCar,
  deleteCar,
};
