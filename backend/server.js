const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.listen(`Sever listening on port ${port}`);
