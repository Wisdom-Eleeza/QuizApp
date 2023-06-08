const mongoose = require("mongoose");
const imageModel = require("../models/imageModel");
const connectDB = require("../config/db");
const express = require("express");
const router = express.Router();

connectDB();

const uploadImage = async (req, res) => {
  const uploadedFile = req.file;

  const newImage = new imageModel({ upload: uploadedFile });

  try {
    await newImage.save();
    res.status(200).json({ message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload image" });
  }
};

module.exports = { uploadImage };

