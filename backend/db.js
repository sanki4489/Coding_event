const mongoose = require("mongoose");

const mongooseURI = "mongodb://localhost:27017/event";

connectToMongo = async () => {
  await mongoose.connect(mongooseURI, () => {
    console.log("Successfully connected to database!");
  });
};

module.exports = connectToMongo;
