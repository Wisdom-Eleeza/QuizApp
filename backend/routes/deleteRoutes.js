const express = require('express')
const deleteUser = require('../controller/deleteController')
// const router = require('./userRoutes')
const router = express.Router()


router.delete('/', deleteUser)