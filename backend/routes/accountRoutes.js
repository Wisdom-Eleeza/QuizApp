const express = require('express')
const accountUpdate = require('../controller/accountController')
const router = express.Router()


router.put('/:id', accountUpdate)