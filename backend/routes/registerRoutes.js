const express = require("express");
const { registerUser } = require("../controller/registerController");
const router = express.Router();

// router.post("/", registerUser);
router.post("/", async (req, res) => {
    try {
      await registerUser(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

module.exports = router;
