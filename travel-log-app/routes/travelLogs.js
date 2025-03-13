
const express = require("express");
const TravelLog = require("../models/TravelLog");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const logs = await TravelLog.findAll();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving travel logs" });
  }
});

// Create a new travel log



router.post("/", async (req, res) => {
  const { title, location, description, imageUrl, userId } = req.body;
  try {
    const log = await TravelLog.create({ title, location, description, imageUrl, userId });
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ message: "Error creating travel log" });
  }
});



module.exports = router;
