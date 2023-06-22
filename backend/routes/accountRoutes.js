const express = require('express')
const accountUpdate = require('../controller/accountController')
const validateUser = require('../middleware/validateUser')
const router = express.Router()


router.put('/:id', validateUser, accountUpdate)

module.exports = router