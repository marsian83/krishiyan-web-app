const mongoose = require("mongoose");

const FpoOrganizationSchema = new mongoose.Schema({
  typeOfOrganization: {
    type: String,
    required: true,
  },
  nameOfFpo: {
    type: String,
    required: true,
  },
  typeOfFpo: {
    type: String,
    required: true,
  },
  dateOfFpo: {
    type: Date,
    required: true,
  },
  organizationalEmail: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  promoterName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FpoOrganization", FpoOrganizationSchema);
