const express = require('express')
const loginUser = require('../controller/loginController')
const verifyToken = require('../middleware/verifyToken')
const router = express.Router()

router.post('/', verifyToken, loginUser)

module.exports = router