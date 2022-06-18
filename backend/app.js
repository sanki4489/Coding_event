const express = require("express");
const connectToMongo = require("./database");

// connected to database
connectToMongo();

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port localhost:${port}`);
});
