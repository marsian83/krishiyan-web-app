const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const User = require("../models/dealer");
const { tokenAuth } = require("../middleware/tokenAuth");
const base64url = require("base64url");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email_Otp,
    pass: process.env.Email_Otp_Password,
  },
});

const encryptionKey = process.env.Encryption_key;
// Encryption function
const encryptEmail = (email, encryptionKey) => {
  const encryptedEmail = CryptoJS.AES.encrypt(email, encryptionKey).toString();
  console.log(encryptEmail);
  return encryptedEmail;
};

// Decryption function
const decryptEmail = (encryptedEmail, encryptionKey) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedEmail, encryptionKey);
  const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedEmail;
};

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
  const { type, name, email, password, mobile } = req.body;
  console.log("type :", type);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      type,
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

// Check Dealer API by NAME
router.get("/check-dealer/:name", async (req, res) => {
  const email = req.params.name;

  try {
    const dealer = await User.findOne({ name });

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

    res.json({ message: "success" });
    console.log("password reset sucessfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
    console.log("internal server error ::", error);
  }
});

//search by mail

router.post("/get-dealer-by-email", async (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    // Find the dealer associated with the provided email
    console.log("entered try block");
    const dealer = await User.findOne({ email });
    if (dealer) {
      return res.json(dealer);
    } else {
      return res
        .status(404)
        .json({ message: "Dealer not found for the provided email." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
});

// Route to update dealer information
router.put("/update-dealer/:dealerEmail", async (req, res) => {
  const dealerEmail = req.params.dealerEmail;
  const updatedInfo = req.body;
  console.log("update email", dealerEmail);
  console.log("updated ingo from backedn", updatedInfo);

  try {
    // Find the dealer by email
    const dealer = await User.findOne({ email: dealerEmail });

    if (!dealer) {
      return res.status(404).json({ error: "Dealer not found" });
    }

    // Update dealer information directly in the retrieved document
    dealer.name = updatedInfo.name;
    dealer.fullAddress = updatedInfo.address;
    dealer.type = updatedInfo.type;
    dealer.mobile = updatedInfo.primaryContactNumber;
    dealer.numberOfFarmers = updatedInfo.numberOfFarmers;
    dealer.organizationName = updatedInfo.organizationName;
    dealer.crops = updatedInfo.crops;
    // Save the updated dealer object
    await dealer.save();

    // Respond with success message
    return res
      .status(200)
      .json({ message: "Dealer information updated successfully" });
  } catch (error) {
    console.error("Error updating dealer:", error);
    return res.status(500).json({ error: "Internal server error" });
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

router.post("/send-reset-password-link", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email address is required." });
  }

  // Check if the email exists in your database
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "User not found with this email." });
  }

  // Encrypt the email for the reset link
  const encryptedEmail = encryptEmail(email, encryptionKey);

  const resetLink = `https://www.krishiyan.com/Passsword-reset?email=${encodeURIComponent(
    encryptedEmail
  )}`;

  const mailOptions = {
    from: "wetacre0@gmail.com",
    to: email,
    subject: "Reset Password",
    html: `<p>Click the following link to reset your password:</p><a href="${resetLink}">${resetLink}</a>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(`Error sending email to ${email}:`, error);
      return res
        .status(500)
        .json({ error: `Email could not be sent. Backend error: ${error}` });
    } else {
      console.log(`Email sent to ${email}:`, info.response);
      return res
        .status(200)
        .json({ message: "Reset password email sent successfully." });
    }
  });
});

module.exports = router;
