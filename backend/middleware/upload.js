const multer = require("multer");


//Define the storage for uploaded images
const storage = multer.diskStorage({
    destination: 'upload'
})
