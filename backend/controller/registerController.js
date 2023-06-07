const {
  registerModel,
  validateRegisterUser,
} = require("../models/registerModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const connectDB = require("../config/db");
const express = require("express");
const router = express.Router();

connectDB(); //connect to the database

// @desc Register new user
// @route POST /api/registerUser
// @access Public
const registerUser = async (req, res) => {
  const { error } = validateRegisterUser(req.body); // validateUser is to validate only user registration
  if (error) return res.status(400).send(error.details[0].message);

  let user = await registerModel.findOne({ email: req.body.email });
  if (user) {
    // if user already in the database, send BadRequest(400)
    return res.status(400).send("User already registered");
  } else {
    // if not in the database, create new user
    user = new registerModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  }

  //hashed the user password
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { registerUser };
