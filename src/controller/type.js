const typeModel = require("../models/type");
const timestamp = require("../utils/timestamp");
const catchError = require("../utils/catchError");

const getAllTypes = async (req, res) => {
  try {
    const [data] = await typeModel.getAllTypes();
    res.status(200).json({
      status: 200,
      timestamp,
      message: "Berhasil mengambil data semua jenis mobil",
      data,
    });
  } catch (error) {
    res.status(500).json(catchError(error));
  }
};

const createType = async (req, res) => {
  const { tipe } = req.body;
  const [checkTypeIsExist] = await typeModel.checkTypeIsExist(tipe);
  if (checkTypeIsExist.length === 1) {
    res.status(400).json({
      status: 400,
      message: "Tipe mobil tersebut sudah terdaftar",
    });
  } else {
    try {
      await typeModel.createType(tipe);
      res.status(201).json({
        status: 201,
        message: "Berhasil menambahkan tipe mobil",
        timestamp,
      });
    } catch (error) {
      res.status(500).json(catchError(error));
    }
  }
};

module.exports = {
  getAllTypes,
  createType,
};
