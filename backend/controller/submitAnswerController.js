const data = require('../models/dataModel')



const submitAnswer = async (req, res) => {
    const { questionId, answerId } = req.body

    try {
        const topic = await data.findOne({ 'questions._id': questionId })
        const question = topic.questions.id(questionId)
        const selectedAnswer = question.answers.id(answerId)

        if(selectedAnswer.is_correct){
            res.status().json({ success: true, message: "Incorrect answer"})
        } else {
            res.status().json({ success: false, message: "Incorrect answer"})
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: "Failed to submit answer" })
    }
}

module.exports = submitAnswer