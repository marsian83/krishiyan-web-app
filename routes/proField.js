const express = require("express");
const {
  addField,
  updateField,
  getFieldByContact,
  getFieldById,
} = require("../controllers/proField");
const router = express.Router();

// Route to add a new field
router.post("/add", addField);

// Route to update an existing field
router.put("/update/:fieldId", updateField);

// Route to get field data by contact number
router.get("/contact/:contactNumber", getFieldByContact);

// Route to get field data by field ID
router.get("/:fieldId", getFieldById);

module.exports = router;
