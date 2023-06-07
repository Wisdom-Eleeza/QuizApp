const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  upload: {
    type: String,
    default: Date.now(),
  },
});

const imageModel = mongoose.model("Image", imageSchema);

module.exports = { imageModel };
