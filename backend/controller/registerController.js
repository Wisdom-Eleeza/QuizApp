const { registerModel, validateRegisterUser } = require('../models/registerModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const connectDB = require('../config/db')
const express = require('express')
const router = express.Router()

connectDB() //connect to the database

