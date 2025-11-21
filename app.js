const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());


app.get("/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});
// healthcheck endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", time: new Date() });
});
module.exports = app;