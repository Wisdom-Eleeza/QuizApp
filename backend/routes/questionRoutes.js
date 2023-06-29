const express = require('express')
const question = require('../controller/questionsController')
const router = express.Router()

router.get('/', question)

module.exports = router