const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const registerRoutes = require("./routes/registerRoutes");
const messageRoutes = require("./routes/messageRoutes");

process.on('unhandledRejection', (err) => {
  console.error('Unhandled promise rejection:', err);
  process.exit(1);
});

dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes middleware
app.use("/api/registerUser", registerRoutes);
app.use("/api/message", messageRoutes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
