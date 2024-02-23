const express = require("express");
const router = express.Router();
const User = require("../models/user");



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

router.delete("/deleteAll", async (req, res) => {
  try {
    const deleteAllUsers = await User.deleteMany({});
    res.send(deleteAllUsers);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    if (!deleteUser) {
      return res.status(404).send("User not found");
    }
    res.send(deleteUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
