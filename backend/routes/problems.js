const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Problem = require("../models/Problems");

// Route 1: Add problems
router.post(
  "/addproblem",
  [body("question", "Atleast 10 characters required").isLength({ min: 10 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check question already exists.  --> TODO
    try {
      const newProblem = new Problem({ question: req.body.question });
      const savedProblem = await newProblem.save();
      res.json(savedProblem);
    } catch (error) {
      return res.status(500).send("Internal server error !");
    }
  }
);

// Route 2: Fetch problems
router.get("/fetchproblem", async (req, res) => {
  try {
    const problems = await Problem.find({});
    return res.status(200).json(problems);
  } catch (error) {
    return res.status(500).send("Internal server error !");
  }
});

// Route 3: Update problems
router.put(
  "/updateproblem/:id",
  [body("question", "Atleast 10 characters required").isLength({ min: 10 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { question, status } = req.body;
      // update
      const updatedProblem = {};
      if (question) {
        updatedProblem.question = question;
      }
      if (status) {
        updatedProblem.status = status;
      }
      let problem = await Problem.findById(req.params.id);
      if (!problem) {
        return res.status(400).send("Not found");
      }
      problem = await Problem.findByIdAndUpdate(
        req.params.id,
        {
          $set: updatedProblem,
        },
        { new: true }
      );
      return res.status(200).json({ problem });
    } catch (error) {
      return res.status(500).send("Internal server error !");
    }
  }
);

// Route 4: Delete problems
router.delete("/deleteproblem/:id", async (req, res) => {
  try {
    let problem = await Problem.findById(req.params.id);
    if (!problem) {
      return res.status(400).send("Not found");
    }
    problem = await Problem.findByIdAndDelete(req.params.id);
    return res.status(200).send({ succes: "Problem Deleted successfully!" });
  } catch (error) {
    return res.status(500).send("Internal server error !");
  }
});

module.exports = router;
