const dataModel = require("../models/dataModel");

// @desc Reset user password
// @route POST /api/users/submit-answer
// @access Private
const submitAnswer = async (req, res) => {
  const answers = req.body;
  console.log(req.body)

  try {
    // use the dataModel to find questions based on the id field matching questionId value in the answer array
    const questions = await dataModel.find({
      _id: { $in: answers.map((a) => a.questionId) },
    });

    let score = 0;
    // Iterate over each question in the questions array
    questions.forEach((question) => {
      const selectedAnswer = answers.find(
        (a) => a.questionId.toString() === question._id.toString()
      );

      // Check if a selectedAnswer exists and matches the correct answer for the question
      if (
        selectedAnswer &&
        selectedAnswer.selectedAnswer ===
          question.answer.find((a) => a.is_correct).text
      ) {
        score += question.points; // Increment the score by the points associated with the question
      }
    });
    res.status(200).json({ success: true, message: score });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Error submitting answers." });
  }
};

module.exports = submitAnswer;
