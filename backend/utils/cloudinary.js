require("dotenv").config();
const cloudinary = require("cloudinary").v2;

//Configuring Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// Configuring cloudinary storage for multer
const storage = new cloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: QuizMasterProfile,
        allowed_format: ['jpg', 'png', 'jpeg',]
    }
})


