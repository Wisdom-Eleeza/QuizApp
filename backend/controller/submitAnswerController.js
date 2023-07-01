const dataModel = require("../models/dataModel");

// @desc Reset user password
// @route POST /api/users/submit-answer
// @access Private
const submitAnswer = async (req, res) => {
  const { questions } = req.body; // Destructure the `questions` property from req.body
  console.log("req.body:", req.body);

  // if (!Array.isArray(questions)) {
  //   return res.status(400).json({ success: false, message: "Invalid format." });
  // }

  const answers = questions.flatMap((question) => question.answers);
  console.log("formatted answers:", answers);

  try {
    // use the dataModel to find questions based on the `_id` field matching `questionId` value in the answer array
    const foundQuestions = await dataModel.find({
      "_id": { $in: questions.map((q) => q._id) },
    });

    let score = 0;
    // Iterate over each question in the foundQuestions array
    for (let question of foundQuestions) {
      const selectedAnswer = answers.find(
        (a) => a.questionId.toString() === question._id.toString()
      );
      // Check if a selectedAnswer exists and matches the correct answer for the question
      if (
        selectedAnswer &&
        question.answers && // Add a check to ensure that `question.answers` exists
        selectedAnswer.selectedAnswer ===
          question.answers.find((a) => a.is_correct).text
      ) {
        score += question.points; // Increment the score by the points associated with the question
      }
    }
    res.status(200).json({ score: score });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error submitting answers." });
  }
};

module.exports = submitAnswer;
