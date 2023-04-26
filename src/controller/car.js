const carModel = require("../models/car");
const timestamp = require("../utils/timestamp");
const catchError = require("../utils/catchError");

const getCars = async (req, res) => {
  const { query } = req;

  try {
    let [data] = await carModel.getCars(query);

    if (data.length == 1) {
      data = data[0];
    }

    res.status(200).json({
      status: 200,
      timestamp,
      message: "Berhasil mengambil data semua mobil",
      data,
    });
  } catch (error) {
    res.status(500).json(catchError(timestamp, error));
  }
};

const addNewCar = async (req, res) => {
  const { body } = req;

  try {
    await carModel.addNewCar(body);
    res.status(201).json({
      status: 201,
      timestamp,
      message: "Berhasil menambah data mobil baru",
      data: body,
    });
  } catch (error) {
    res.status(500).json(catchError(timestamp, error));
  }
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await carModel.updateCar(id, body);
    res.status(200).json({
      status: 200,
      timestamp,
      message: `Berhasil mengupdate data mobil dengan id ${id}`,
      data: body,
    });
  } catch (error) {
    res.status(500).json(catchError(timestamp, error));
  }
};

const deleteCar = async (req, res) => {
  const { id } = req.params;
  try {
    await carModel.deleteCar(id);
    res.status(200).json({
      status: 200,
      timestamp,
      message: `Berhasil menghapus data mobil dengan id ${id}`,
      data: null,
    });
  } catch (error) {
    res.status(500).json(catchError(timestamp, error));
  }
};

module.exports = {
  getCars,
  addNewCar,
  updateCar,
  deleteCar,
};
