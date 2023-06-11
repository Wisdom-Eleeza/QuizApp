const validateMessage = require("../middleware/validateMessage");
const messageModel = require("../models/messageModel");

const sendMessage = async (req, res) => {
  // const { error } = validateMessage(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  try {
    const { name, email, phoneNumber, subject, message } = req.body;

    //create a new message
    const newMessage = new messageModel({
      name,
      email,
      phoneNumber,
      subject,
      message,
    });
    await newMessage.save();
    res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Failed to send message:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { sendMessage };
