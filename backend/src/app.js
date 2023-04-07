const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.status(200).json("hello");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Running on port:${port}`);
});
