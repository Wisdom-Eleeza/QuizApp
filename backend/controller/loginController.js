const userModel = require('../models/userModels')
const bcrypt = require('bcrypt')
const connectDB = require('../config/db')


connectDB() // Connect to the database

const loginUser = async (req, res) => {
    try {
        // finding the email a user, if not in the database send error
        let user = await userModel.findOne({email: req.body.email })
        if(!user) {
            return res.status(400).json({ success: false, message: 'Invalid Email or Password'})
        }

        // comparing the password provided by the user with the hashed password in the database, if not true user have no access
        const validPassword = await bcrypt.compare(req.body.email, user.password)
        if(!validPassword) return res.status(400).json({ success: false, message: 'Invalid Email or Password'})

        // token generating logic in userModel, 
        // generating token to a specific user
        const token = user.generateAuthToken()
        res.status(200).json({ success: true, token, message: 'Token sent successfully'})
    } catch (error) {
        
    }
}

module.exports = loginUser