const register = require("../models/imageModel");
const mongoose = require("mongoose");
const imageModel = require("../models/imageModel");
const uploadToCloudinary = require("../controller/imageController");
const express = require("express");
const cloudinary = require("../utils/cloudinary");
const router = express.Router();

const uploadImage = async (req, res) => {
  // try { creating user which have been created already in registerController.js
  //   const user = new User(req.body);
  //   await user.save();
  //   res.status(201).send(user);
  // } catch (error) {
  //   res.status(400).send(error);
  // }

  try {
    //upload image to cloudinary
    const data = await uploadToCloudinary(req.file.path, 'QuizMasterImageUpload')
    //save image url and publid to the database
    const savedImage = await User.updateOne(
      {_id: req.params.id },
      {
        $set: {
          imageUrl: data.url,
          publicId: data.public_id
        }
      }
    )
  } catch (error) {
    
  }
};

module.exports = uploadImage;















// try {
//   const uploadedFile = req.uploadedFile
//   console.log(req.file)
//   if(!uploadedFile) return res.status(400).send('Image is required')

//   //Upload image to Cloudinary
//   const result = await cloudinary.uploader.upload(uploadedFile.path)

//   // Create newImage using Cloudinary's response
//   const newImage = new imageModel({
//     name: result.original_filename,
//     filePath: result.secure_url,

//   })
//   await newImage.save()
//   res.status(200).json({
//     message: 'Image uploaded successfully',
//     filePath: result.secure_url,
//   })
// } catch (error) {
//   console.log(error);
//   res.status(500).json({error: 'Failed to upload image'})
// }
