const express = require("express");
const connectToMongo = require("./db");
require("dotenv").config();

// connected to database
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

// json middle ware
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/problem", require("./routes/problems"));
app.use("/api/code", require("./routes/codes"));

app.get("/", (req, res) => {
  res.send("Welcome to Coding event api");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
