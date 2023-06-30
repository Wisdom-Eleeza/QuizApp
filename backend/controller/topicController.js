const dataModel = require("../models/dataModel");

// @desc Fetching topics without questions, points and answers
// @route POST /api/users/topic
// @access Private
const Topic = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(req.body);
    const topicData = await dataModel.findById(_id);

    if (topicData) {
      const { topic, desktopImage } = topicData;
      return res
        .status(200)
        .json({ success: true, topic, desktopImage, topicId: _id });
    } else {
        return res.status(404).json({ success: false, message: "Topic Not Found"})
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

module.exports = Topic;
