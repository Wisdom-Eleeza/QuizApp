const data = require("../models/dataModel");

const questions = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const question = await data.find().skip((page - 1) * limit);
    res.status().json({ success: true, message: question });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error fetching questions." });
  }
};

module.exports = questions;
