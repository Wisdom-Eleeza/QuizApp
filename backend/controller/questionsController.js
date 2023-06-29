const data = require("../models/dataModel");

// @desc Fetching Question from database
// @route GET /api/users/questions?page=1&limit=10
// @access Private
const questions = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Current page number
  let limit = parseInt(req.query.limit) || 10; // Number of items per page

  // Validating limit to ensure its not greater than 10
  limit = Math.min(limit, 10)

  // Calculating the maximum limit that can be skipped
  const skip = Math.max((page - 1) * limit, 0);

  try {
    const fetchedQuestions = await data
      .find()
      .limit(limit)
      .skip(Math.max(0, skip));
    res.status(200).json({ success: true, message: fetchedQuestions });
    console.log(fetchedQuestions);
  } catch (error) {
    console.log(error.message); // winston
    res
      .status(500)
      .json({ success: false, message: "Error fetching questions." });
  }
};

module.exports = questions;
