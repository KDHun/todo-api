const express = require("express");
const task = require("../model/task");

const router = express.Router();

module.exports = router;

//Insert Data
router.post("/task", async (req, res) => {
  console.log("\n### POST request ###");
  try {
    const data = new task({
      title: req.body.title,
      description: req.body.description,
      isCompleted: req.body.isCompleted,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
    });
    console.log("\n ---> Storing New Task :\n", data,"\n");
    const dataToSave = await data.save();
    console.log("\n ---> New Task successfully saved to DB:\n", dataToSave,"\n");
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log("\n ---> Error in saving data to DB: \n ``` \n", error, "\n");
    res.status(400).json({ message: error.message });
  }
});
//Get All Data
router.get("/alltask", async (req, res) => {
  console.log("GET request");
  try {
    console.log("Fetching all tasks...");
    const data = await task.find();
    res.json(data);
  } catch (error) {
    console.log("Error in fetching data from DB: \n ``` \n", error, "\n");
    res.status(500).json({ message: error.message });
  }
});
//Get by ID Method
router.get("/task/:id", async (req, res) => {
  console.log("GET request for id :", req.params.id);
  try {
    console.log("Fetching task for id :", req.params.id);
    const data = await task.findById(req.params.id);
    console.log("Task for id :", req.params.id, "fetched successfully");
    console.log("Task :", data);
    res.json(data);
  } catch (error) {
    console.log("Error in fetching data from DB: \n ``` \n", error, "\n");
    res.status(500).json({ message: error.message });
  }
});
//Update by ID Method

router.patch("/task/:id", async (req, res) => {
  console.log("PATCH request for id :", req.params.id);
  console.log("Patching task :", req.body);
  try {
    console.log("Updating task for id :", req.params.id," ...")
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await task.findByIdAndUpdate(id, updatedData, options);
    console.log("Task for id :", req.params.id, "updated successfully");
    res.send(result);
  } catch (error) {
    console.log("Error in updating data from DB: \n ``` \n", error, "\n");
    
    res.status(400).json({ message: error.message });
  }
});
//Delete by ID Method
router.delete("/task/:id", async (req, res) => {
  console.log("DELETE request for id :", req.params.id);
  try {
    console.log("Deleting task for id :", req.params.id," ...")
    const id = req.params.id;
    const data = await task.findByIdAndDelete(id);
    console.log("Task for id :", req.params.id, "deleted successfully");
  } catch (error) {
    console.log("Error in deleting data from DB: \n ``` \n", error, "\n");
    res.status(400).json({ message: error.message });
  }
});
