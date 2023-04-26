const brandModel = require("../models/brand");
const timestamp = require("../utils/timestamp");
const catchError = require("../utils/catchError");

const getAllBrands = async (req, res) => {
  try {
    const [data] = await brandModel.getAllBrands();
    res.status(200).json({
      status: 200,
      timestamp,
      message: "Berhasil mengambil data semua merk mobil",
      data,
    });
  } catch (error) {
    res.status(500).json(catchError(timestamp, error));
  }
};

module.exports = {
  getAllBrands,
};
