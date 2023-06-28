const express = require('express')
const router = express.Router()
const submitAnswer = require('../controller/submitAnswerController')


router.post('/', submitAnswer)