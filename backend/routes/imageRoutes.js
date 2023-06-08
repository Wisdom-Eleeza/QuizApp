const express = require("express");
const { uploadImage } = require("../controllers/imageController");
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post("/", upload.single('image'), uploadImage);

module.exports = router;




