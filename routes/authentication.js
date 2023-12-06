const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/dealer");
const { tokenAuth } = require("../middleware/tokenAuth");
const base64url = require("base64url");

function decodeJwt(jwtToken) {
  const parts = jwtToken.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid JWT format");
  }

  const decodedHeader = JSON.parse(
    Buffer.from(
      parts[0].replace(/-/g, "+").replace(/_/g, "/"),
      "base64"
    ).toString("utf8")
  );
  const decodedPayload = JSON.parse(
    Buffer.from(
      parts[1].replace(/-/g, "+").replace(/_/g, "/"),
      "base64"
    ).toString("utf8")
  );

  return decodedPayload;
}

//Register
router.post("/register", async (req, res) => {
  console.log("inside register");
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
      "secret"
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
      "secret"
    );
    console.log(token);
    res.cookie("token", token);
    res.status(200).json({ oldUser, token, msg: "Login successfull!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/oauth/login", async (req, res, next) => {
  const { credentials } = req.body;
  try {
    const decoded = decodeJwt(credentials);
    console.log("inside oauth");
    console.log(decoded);
    let user = {};
    const existingUser = await User.findOne({ email: decoded.email });
    console.log(existingUser);

    if (existingUser) {
      user = existingUser;
    } else {
      user = await User.create({
        name: decoded.name,
        email: decoded.email,
        // password: ,
        // mobile: decoded.mobile,
      });
    }
    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
        mobile: user.mobile ? user.mobile : 1111111111,
      },
      "secret"
    );
    console.log(token);
    res.cookie("token", token);
    res.status(200).json({ user, token, msg: "Login successful!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Check Dealer API by Email
router.get("/check-dealer/:email", async (req, res) => {
  const email = req.params.email;

  try {
    const dealer = await Dealer.findOne({ email });

    if (dealer) {
      res.json({ exists: true, dealer });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//forgot - password

router.post("/reset-password", async (req, res) => {
  console.log("forgot password server side hitting");
  try {
    const { email, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      console.log("email not found");
      return res.status(404).json({ message: "Email not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    user.password = hashedPassword;
    await user.save();
    console.log("hashed password ::", hashedPassword);

    res.json({ message: "Password reset successfully" });
    console.log("password reset sucessfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
    console.log("internal server error ::", error);
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
