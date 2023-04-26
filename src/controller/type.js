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
    res.status(500).json(catchError(timestamp, error));
  }
};

module.exports = {
  getAllTypes,
};
