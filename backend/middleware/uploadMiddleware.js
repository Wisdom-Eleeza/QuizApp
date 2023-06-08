const multer = require("multer");

// Set up Multer for file upload / sets up where to store POST images
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const extension = file.mimetype.split("/")[1];
    cb(null, `${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({ storage: fileStorageEngine });

module.exports = upload;

