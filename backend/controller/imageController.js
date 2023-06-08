const registerUser = require('../models/imageModel')
const mongoose = require("mongoose");
const imageModel = require("../models/imageModel");
const express = require("express");
const router = express.Router();



const uploadImage = async (req, res) => {
  try {
    const uploadedFile = req.file;
    console.log(req.file);
    if(!uploadedFile) return res.status(400).send("Image is required")
    const newImage = new imageModel({name: uploadedFile.originalname, filePath: uploadedFile.path });
    res.status(200).json({ message: "Image uploaded successfully", filePath: uploadedFile.path});
  } catch (error) {
    
  }

  

  // try {
  //   await newImage.save();
  //   res.status(200).json({ message: "Image uploaded successfully" });
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to upload image" });
  // }
};

module.exports = uploadImage;
