const express = require("express");
const typeController = require("../controller/type");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.get("/", authMiddleware, typeController.getAllTypes);
router.post("/", authMiddleware, typeController.createType);

module.exports = router;
