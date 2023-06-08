const upload = require("../middleware/uploadMiddleware");
const express = require("express");
const uploadImage = require('../controller/imageController');
const router = express.Router();
const multer = require("multer");

// const upload = multer({ destination: 'uploads/' });

// router.post("/", upload.single('image'), uploadImage);
router.post("/", uploadImage);

module.exports = router;
