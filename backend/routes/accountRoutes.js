const express = require('express')
const accountUpdate = require('../controller/accountController')
const validateUser = require('../middleware/validateUser')
const router = express.Router()


router.patch('/:id', validateUser, accountUpdate)
router.patch('/:id/password', validateUser, accountUpdate)

module.exports = router