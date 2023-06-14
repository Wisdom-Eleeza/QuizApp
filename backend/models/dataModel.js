const { string } = require('joi')
const mongoose = require('mongoose')
const { Schema } = mongoose

const answerSchema = new Schema({
    text: String,
    is_correct: Boolean,
})

const questionSchema = new Schema({
    question: String,
    points: Number,
    answers: [answerSchema],
})


