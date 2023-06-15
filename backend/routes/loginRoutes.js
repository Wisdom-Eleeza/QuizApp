const express = require('express')
const loginUser = require('../controller/loginController')
const loginValidate = require('../middleware/loginMiddleware')
const router = express.Router()

router.post('/', loginValidate, loginUser)

module.exports = router