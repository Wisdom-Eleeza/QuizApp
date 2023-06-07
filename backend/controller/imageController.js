const mongoose = require("mongoose");
const imageModel = require("../models/imageModel");
const connectDB = require("../config/db");
const express = require("express");
const router = express.Router();

connectDB(); // connect to the database

// @desc Register new user
// @route POST /api/upload
// @access Public
const uploadImage = async (req, res) => {
  // Retrieve the uploaded file from req.file
  const uploadedFile = req.file;

  // Create a new instance of the Image model
  const newImage = new imageModel({ upload: uploadedFile });

  try {
    await newImage.save();
    res.status(200).json({ message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload Image" });
  }
};

module.exports = { uploadImage };
