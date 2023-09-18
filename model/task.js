const mongoose = require("mongoose");

const task = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      type: String,
    },
    isCompleted: {
      required: true,
      type: Boolean,
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
    },
  },
  { collection: "task" }
);

module.exports = mongoose.model("task", task);
