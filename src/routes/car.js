const express = require("express");
const carController = require("../controller/car");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.get("/", authMiddleware, carController.getCars);
router.post("/", authMiddleware, carController.addNewCar);
router.patch("/:id", authMiddleware, carController.updateCar);
router.delete("/:id", authMiddleware, carController.deleteCar);

module.exports = router;
