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

app.get("/", (req, res) => {
  res.send("Coding event api");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
