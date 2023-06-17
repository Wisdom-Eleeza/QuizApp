const express = require('express')
const forgetPassword = require('../controller/4getPasswordController')
const router = express.Router()

router.post('/', forgetPassword)

module.exports = router