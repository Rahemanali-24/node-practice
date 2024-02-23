const express = require("express");
const router = express.Router();
const User = require("../models/user");

// The term "router" in the context of Node.js and Express does not necessarily imply routing between pages in a traditional web application sense. Instead, it refers to organizing and handling routes for different endpoints or resources in your application.

//router to create new User

router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
    console.log(error)
  }
});

module.exports = router;
