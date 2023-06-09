// const multer = require("multer");
// const upload = require("../middleware/uploadMiddleware");
// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;

// // Configuring Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadToCloudinary = async (path, QuizMasterImageUpload) => {
//   try {
//     const data = await cloudinary.uploader.upload(path, { QuizMasterImageUpload });
//     return { url: data.url, public_id: data.public_id };
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// module.exports = uploadToCloudinary;






// function cloudinaryFunction(){
//     //Configuring Cloudinary
//     cloudinary.config({
//         cloud_name: process.env.CLOUDINARY_NAME,
//         api_key: CLOUDINARY_API_KEY,
//         api_secret: CLOUDINARY_API_SECRET,
//       });

//       // Configuring cloudinary storage for multer
//       const storage = new cloudinaryStorage({
//           cloudinary: cloudinary,
//           params: {
//               folder: QuizMasterProfile,
//               allowed_format: ['jpg', 'png', 'jpeg',],
//             //   path:
//           }
//       })

//       //Creating multer instance with Cloudinary storage
//       const upload = multer({storage: storage})
// }

//       module.exports = cloudinaryFunction
