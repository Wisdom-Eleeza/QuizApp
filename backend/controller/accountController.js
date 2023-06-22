const userModel = require('../models/userModels')



const accountUpdate = async (req, res) => {
    try {
        const user = req.params.id
        const { fullName, contact, location, gender } = req.body
        
    } catch (error) {
        
    }
}

module.exports = accountUpdate