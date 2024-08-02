const FpoOrganization = require("../models/appFPOUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Replace this with your actual secret key
const JWT_SECRET = "your_secret_key";

// Create a new FPO
exports.createFpo = async (req, res) => {
  try {
    const { password, contactNumber, ...otherDetails } = req.body;

    // Debug log to print request body
    console.log("Received request body:", req.body);

    // Check if contactNumber is present
    if (!contactNumber) {
      throw new Error("contactNumber is required");
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new FPO organization with the hashed password and contact number
    const fpoOrganization = new FpoOrganization({
      ...otherDetails,
      contactNumber,
      password: hashedPassword,
    });

    await fpoOrganization.save();

    // Generate a token with the contact number
    const token = jwt.sign(
      { contactNumber: fpoOrganization.contactNumber },
      JWT_SECRET
    );

    res.status(201).send({ fpoOrganization, token });
  } catch (error) {
    console.error("Error creating FPO:", error);
    res.status(400).send({ error: "Error creating FPO" });
  }
};
// Sign in

exports.signIn = async (req, res) => {
  const { contactNumber, password } = req.body;

  try {
    // Find the user by contact number
    const fpoOrganization = await FpoOrganization.findOne({ contactNumber });

    if (!fpoOrganization) {
      return res.status(401).send({ error: "Invalid login credentials" });
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, fpoOrganization.password);

    if (!isMatch) {
      return res.status(401).send({ error: "Invalid login credentials" });
    }

    // Generate a token with the mobile number and password
    const token = jwt.sign(
      {
        contactNumber: fpoOrganization.contactNumber,
        password: fpoOrganization.password,
      },
      JWT_SECRET
    );

    res.send({ fpoOrganization, token });
  } catch (error) {
    res.status(400).send(error);
  }
};
// Get all FPOs
exports.getAllFpos = async (req, res) => {
  try {
    const fpos = await FpoOrganization.find();
    res.status(200).send(fpos);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a specific FPO by ID
exports.getFpoById = async (req, res) => {
  try {
    const fpo = await FpoOrganization.findById(req.params.id);
    if (!fpo) {
      return res.status(404).send();
    }
    res.status(200).send(fpo);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a specific FPO by ID
exports.updateFpoById = async (req, res) => {
  try {
    const fpo = await FpoOrganization.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!fpo) {
      return res.status(404).send();
    }
    res.status(200).send(fpo);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a specific FPO by ID
exports.deleteFpoById = async (req, res) => {
  try {
    const fpo = await FpoOrganization.findByIdAndDelete(req.params.id);
    if (!fpo) {
      return res.status(404).send();
    }
    res.status(200).send(fpo);
  } catch (error) {
    res.status(500).send(error);
  }
};
