const express = require('express')
const accountUpdate = require('../controller/accountController')
const validateUser = require('../middleware/validateUser')
const router = express.Router()


router.patch('/:id', validateUser, accountUpdate)

module.exports = router