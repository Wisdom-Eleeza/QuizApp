const express = require('express')
const accountUpdate = require('../controller/accountController')
const accountSettingsValidation = require('../middleware/validateAccountSettings')
const router = express.Router()


router.put('/:id', accountSettingsValidation, accountUpdate)