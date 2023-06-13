const express = require("express");
const { registerUser } = require("../controller/registerController");
const validateRegisterUser = require("../middleware/validateUser");
const { editUser } = require('../controller/editUser')
// const protectedRoute = require("../middleware/protectedRoutes");
const router = express.Router();

router.post("/", registerUser)
router.patch('/:id', editUser);

module.exports = router;
