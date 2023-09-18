const express = require("express");
const task = require("../model/task");
const router = express.Router();
module.exports = router;
router.post("/task", async (req, res) => {
  try {
    const data = new task({
      title: req.body.title,
      description: req.body.description,
      isCompleted: req.body.isCompleted,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
    });
    const dataToSave = await data.save(); 
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/alltask", async (req, res) => {
  try {
    const data = await task.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/task/:id", async (req, res) => {
  try {
    const data = await task.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.patch("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await task.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {    
    res.status(400).json({ message: error.message });
  }
});
router.delete("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await task.findByIdAndDelete(id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
