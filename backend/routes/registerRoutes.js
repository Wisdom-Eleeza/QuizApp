const express = require("express");
const { registerUser } = require("../controller/registerController");
const validateRegisterUser = require("../middleware/validateUser");
const router = express.Router();

router.post("/", validateRegisterUser, registerUser);

module.exports = router;
