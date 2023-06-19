const express = require("express");
const resetPassword = require("../controller/resetPasswordController");
const router = express.Router();

router.get("/", resetPassword);

module.exports = router;
