const express = require('express')
const deleteUser = require('../controller/deleteController')
const router = express.Router()


router.delete('/', deleteUser)

module.exports = router