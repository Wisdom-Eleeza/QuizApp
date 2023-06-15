const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");
const messageRoutes = require("./routes/messageRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const connectDB = require("./config/db");

connectDB(); //connection to mongodb database

dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/status", (req, res) => {
  res.send("API is running");
});

// Routes middleware
app.use("/api/registerUser", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/subscribe", subscribeRoutes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
