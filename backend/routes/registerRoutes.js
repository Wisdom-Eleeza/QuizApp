const express = require("express");
const { registerUser } = require("../controller/registerController");
const uploadImage = require("../controller/imageController")
const router = express.Router();
const multer = require("multer");

router.post("/", registerUser);
// router.post("/", uploadImage);

module.exports = router;
