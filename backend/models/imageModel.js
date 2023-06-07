const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  upload: {
    data: Buffer,
    contentType: { type: String, default: 'image/png' },
    default: Date.now,
  },
});

const imageModel = mongoose.model("Image", imageSchema);

module.exports = { imageModel };

