// routes/users.js
const express = require("express");
const router = express.Router();
let users = require("../data");

// CREATE
router.post("/", (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// READ ALL
router.get("/", (req, res) => {
  res.json(users);
});

// READ ONE
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

// UPDATE
router.put("/:id", (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    users[index].name = req.body.name;
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// DELETE
router.delete("/:id", (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    const deleted = users.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;