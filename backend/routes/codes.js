const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Code = require("../models/Codes");
const { body, validationResult } = require("express-validator");

// Route 1: Add code
router.post(
  "/addcode/:problemid",
  fetchuser,
  [
    body("solution", "Solution cannot be blank").exists(),
    body("language", "Please give a valid language").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { solution, language } = req.body;
      const newCode = new Code({
        user: req.user.id,
        problem: req.params.problemid,
        solution: solution,
        language: language,
      });
      const savedCode = await newCode.save();
      return res.status(200).json(savedCode);
    } catch (error) {
      return res.status(500).send("Internal server error !");
    }
  }
);

// Route 2: Read code
router.get("/fetchcode", fetchuser, async (req, res) => {
  try {
    const codes = await Code.find({});
    return res.status(200).json(codes);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error !");
  }
});

// Route 3: Update code
router.put(
  "/updatecode/:id",
  fetchuser,
  [
    body("solution", "Solution cannot be blank").exists(),
    body("language", "Please give a valid language").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let code = await Code.findById(req.params.id);
      if (!code) {
        return res.status(400).send("Not found");
      }
      // check user own it or not
      if (req.user.id !== code.user.toString()) {
        return res.status(401).send("Access denied");
      }
      const { solution, language } = req.body;
      let updatedCode = {};
      if (solution) {
        updatedCode.solution = solution;
      }
      if (language) {
        updatedCode.language = language;
      }
      code = await Code.findByIdAndUpdate(
        req.params.id,
        { $set: updatedCode },
        { new: true }
      );
      return res.status(200).json({ code });
    } catch (error) {
      return res.status(500).send("Internal server error !");
    }
  }
);

// Route 4: Delete code
router.delete("/deletecode/:id", fetchuser, async (req, res) => {
  try {
    let code = await Code.findById(req.params.id);
    if (!code) {
      return res.status(400).send("Not found");
    }
    // check user own it or not
    if (req.user.id !== code.user.toString()) {
      return res.status(401).send("Access denied");
    }
    code = await Code.findByIdAndDelete(req.params.id);
    return res.status(200).send({ success: "Deleted code successfully !" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error !");
  }
});

module.exports = router;
