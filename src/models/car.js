const dbPool = require("../config/database");

const getCars = (query) => {
  const keys = Object.keys(query);
  if (keys.length == 0) {
    const SQLQuery = `SELECT cars.id, brands.merk, cars.nama_mobil, cars.transmisi, cars.tenaga, cars.kapasitas_mesin, types.jenis FROM cars JOIN types ON cars.id_jenis = types.id JOIN brands ON cars.id_merk = brands.id ORDER BY cars.id`;

    return dbPool.execute(SQLQuery);
  } else {
    let set = "";
    keys.forEach((key) => {
      set += `${key}='${query[key]}' AND `;
    });

    set = set.slice(0, -5);

    const SQLQuery = `SELECT cars.id, brands.merk, cars.nama_mobil, cars.transmisi, cars.tenaga, cars.kapasitas_mesin, types.jenis FROM cars JOIN types ON cars.id_jenis = types.id JOIN brands ON cars.id_merk = brands.id WHERE ${set} ORDER BY cars.id`;

    return dbPool.execute(SQLQuery);
  }
};

const addNewCar = (body) => {
  const SQLQuery = `INSERT INTO cars (id_jenis, id_merk, nama_mobil, transmisi, tenaga, kapasitas_mesin) 
                    VALUES ('${body.id_jenis}', '${body.id_merk}', '${body.nama_mobil}', '${body.transmisi}', '${body.tenaga}', '${body.kapasitas_mesin}')`;

  return dbPool.execute(SQLQuery);
};

const updateCar = (id, body) => {
  let set = "";
  const keys = Object.keys(body);
  keys.forEach((key) => {
    set += `${key}='${body[key]}', `;
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
