const connectDB = require('../config/db')
const Topic = require('../models/dataModel')


connectDB()

const Topic = async(req, res) => {
    try {
        const topics = await Topic.find()
        res.status(200).json({ success: true, topics})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error retrieving topics'})
    }
}

