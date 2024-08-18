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
  },
  organizationalEmail: {
    type: String,
  },
  contactNumber: {
    type: String,

    unique: true,
  },
  promoterName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FpoOrganization", FpoOrganizationSchema);
