// const multer = require("multer");

// const storage = multer.diskStorage({});
// const upload = multer({ storage: storage });
// module.exports = upload;

// Set up Multer for file upload / sets up where to store POST images
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'QuizMasterImageUpload/');
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
//     const extension = file.mimetype.split("/")[1];
//     cb(null, `${uniqueSuffix}.${extension}`);
//   },
// });

// const upload = multer({ storage: fileStorageEngine });

