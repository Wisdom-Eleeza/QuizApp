const data = require("../models/dataModel");

// @desc Fetching Question from database
// @route GET /api/users/questions?page=1&limit=10
// @access Private
const questions = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // current page number
  const limit = 10; // Number of items per page

  try {
    const fetchedData = await data.findOne();
    if (!fetchedData) throw new Error("No data found");

    const questionsArray = fetchedData.questions || []; // Added null check for questionsArray
    const totalQuestions = questionsArray.length;

    // checking if the requested page is valid
    if (isNaN(page) || page < 1 || page > totalQuestions) {
      throw new Error("Invalid page number");
    }

    // Fetching the current question
    const currentQuestion = questionsArray[page - 1];
    const response = {
      success: true,
      page,
      limit,
      totalQuestions,
      question: currentQuestion.question,
    };
    res.status(200).json(response);
    console.log(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Error fetching question" });
  }
};

module.exports = questions;
