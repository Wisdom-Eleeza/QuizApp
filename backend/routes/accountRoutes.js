const express = require('express')
const accountUpdate = require('../controller/accountController')
const validateAccount = require('../middleware/accountMiddleware')
const router = express.Router()


router.patch('/:id', validateAccount, accountUpdate)
router.patch('/:id/password', accountUpdate)

module.exports = router