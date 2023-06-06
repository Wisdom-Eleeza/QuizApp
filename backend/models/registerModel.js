const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 5,
        maxlength: 255,
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is a required field'],
        minlength: 5,
        maxlength: 1024,
    }
})


