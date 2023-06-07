const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const registerModel = require("./routes/registerRoutes");
const imageModel = require("./routes/imageRoutes")

dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use("/api/registerUser", registerModel);
app.use("/api/upload", imageModel);

app.listen(port, () => {
  console.log(`Server listening on http://localhost: ${port}`);
});
