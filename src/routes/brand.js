const express = require("express");
const brandController = require("../controller/brand");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.get("/", authMiddleware, brandController.getAllBrands);

module.exports = router;
