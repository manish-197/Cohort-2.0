const express = require("express");

const app = express();

app.use(express.json());

const notes = [
  // {
  //     title: "Sample Note",
  //     descriptio: "this is description"
  // }
];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.send("note created");
  console.log(notes);
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("note deleted");
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.send("note updated by patch method");
});

app.put("/notes/:index", (req, res) => {
  notes[req.params.index] = req.body;
  res.send("note updated by put method");
});

module.exports = app;