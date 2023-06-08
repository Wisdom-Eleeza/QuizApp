const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  filePath: String,
});

const imageModel = mongoose.model("Image", imageSchema);

module.exports = imageModel;
