const express = require("express");
const { registerUser } = require("../controller/registerController");
const router = express.Router();
const multer = require('multer')

router.post("/", registerUser);

module.exports = router;
