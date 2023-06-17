const express = require("express");
const router = express.Router();
const User = require("../models/dealer");
const adminModel = require("../models/admin");
router.post("/role-superAdmin/add", async (req, res, next) => {
  try {
    const { user } = req.body; //user id
    const userDoc = await User.findOne({ _id: user });
    if (!userDoc) throw new Error("User not found.");
    const newAdmin = new adminModel({ user, active: true });
    await newAdmin.save();
    res.status(201).send({ message: "Admin created!" });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
module.exports = router;
