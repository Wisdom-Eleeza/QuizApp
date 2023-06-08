const express = require("express");
const { registerUser, uploadImage } = require("../controller/registerController");
const router = express.Router();
const multer = require("multer");

router.post("/", registerUser);
router.post("/", uploadImage);

module.exports = router;
