const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/dealer");
const {tokenAuth} = require("../middleware/tokenAuth");


//Register
router.post("/register", async (req, res) => {
  console.log("inside register")
  const { name, email, password, mobile } = req.body;
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      name,
      email,
      password: hashedPassword,
      mobile,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id, mobile: result.mobile },
      "secret",
    );
    console.log(token);
    res.cookie("token", token);
    res.status(201).json({ result, token, msg: "Registered successfull!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(req.body);
    const oldUser = await User.findOne({ email });

    if (!oldUser)
      return res
        .status(404)
        .json({ message: "User doesn't exist.Check your email Id." });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong Password!" });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id, mobile: oldUser.mobile },
      "secret",
    );
    console.log(token);
    res.cookie("token", token);
    res.status(200).json({ oldUser, token, msg: "Login successfull!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Me {Profile}
router.get("/me", tokenAuth, async (req, res) => {
  try {
    console.log("Inside /me");
    const user = req.user;
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ msg: err.message });
  }
});


module.exports = router;
