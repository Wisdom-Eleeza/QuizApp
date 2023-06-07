const multer = require("multer");

// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: "upload", // Specify the destination folder for storing images
  filename: (req, file, cb) => {
    // Generate a unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const extension = file.mimetype.split("/")[1];
    cb(null, `${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
