require("dotenv").config();
const TaskRoute = require("./routes/task");
const express = require("express");
const mongoose = require("mongoose");
const mongoString =
  process.env.DATABASE_URL;
const cors = require("cors");

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
app.use(cors());
app.use("/",TaskRoute);

module.exports = app;