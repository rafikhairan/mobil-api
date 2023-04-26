const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router.post("/register", userController.createNewUser);
router.post("/login", userController.getUser);

module.exports = router;
