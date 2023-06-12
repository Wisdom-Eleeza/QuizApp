const registerModel = require("../models/registerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateRegisterUser = require("../middleware/validateUser");

// @desc Register new user
// @route POST /api/registerUser
// @access Public
const registerUser = async (req, res) => {
  const { error } = validateRegisterUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    let user = await registerModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("User already registered");
    }

    user = new registerModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { registerUser };
