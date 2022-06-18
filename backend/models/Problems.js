const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
  question: { type: String, required: true },
  status: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("problems", ProblemSchema);
