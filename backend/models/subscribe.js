const mongoose = require("mongoose");
const Joi = require("joi");

const subscribeSchema = new mongoose.Schema({
    email: String
});

module.exports = subscribeSchema;




function subscribe(req, res) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email()
  });

  const { error } = schema.validate(req.email);
  if (error) {
    error.details.map((detail) => detail.message);
    res.status().json({ success: true, message: error.details[0].message });
  } else {
    res.status().json({ success: true, message: "Email submitted successfully" });
  }
}
