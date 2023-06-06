const { registerModel, validateRegisterUser } = require('../models/registerModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const connectDB = require('../config/db')
const express = require('express')
const router = express.Router()

connectDB() //connect to the database


const registerUser = async (req, res) => {
    const { error } = (req.body) // validateUser is to validate only user registration
    if (error) return res.status(400).send(error.details[0].message)

    let user = await registerModel.findOne({ email: req.body.email })
}