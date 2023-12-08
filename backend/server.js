const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("Kavach");
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.listen(5001, console.log("Hii Ruchi"));
