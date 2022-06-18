const mongoose = require("mongoose");

// user, problems are as foreign key

const CodeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  problem: { type: mongoose.Schema.Types.ObjectId, ref: "problems" },
  solution: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("codes", CodeSchema);
