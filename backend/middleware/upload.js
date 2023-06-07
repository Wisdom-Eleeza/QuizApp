const multer = require("multer");


//Define the storage for uploaded images

// set up the upload middleware
const upload = multer({
  storage: storage,
});
next();

module.exports = upload;
