const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    type: String,
  },
  email: {
    type: String,
  },
});

const FpoRegistrationSchema = new mongoose.Schema({
  // Personal Information
  fullName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
  },

  // FPO Information
  fpoName: {
    type: String,
    required: true,
  },
  fpoLocation: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  activeFarmerMembers: {
    type: Number,
    required: true,
  },
  registeredAs: {
    type: String,
  },
  dateOfRegistration: {
    type: String,
  },
  facilitatingInstitutions: {
    type: String,
  },
  numVillagesCovered: {
    type: Number,
  },
  numGramPanchayatBlocksCovered: {
    type: Number,
  },
  otherRegisteredAs: {
    type: String,
  },
  otherFacilitatingInstitution: {
    type: String,
    default: "not provided",
  },

  primaryProducts: {
    type: String,
  },
  operationalDuration: {
    type: String,
  },
  annualProduction: {
    type: Number,
  },
  annualRevenue: {
    type: Number,
  },
  percentageGrowthProduction: {
    type: Number,
  },
  percentageGrowthRevenue: {
    type: Number,
  },

  // Distribution Channels (store as an array of strings)
  distributionChannels: {
    type: [String],
  },

  // FPO Needs (store as an array of strings)
  selectedSupport: {
    type: [String],
  },

  // Challenges Faced (store as an array of strings)
  selectedChallenges: {
    type: [String],
  },

  // Reasons for Attending Conference
  reasons: {
    type: {
      insights: { type: Boolean, default: false },
      connect: { type: Boolean, default: false },
      learn: { type: Boolean, default: false },
      opportunities: { type: Boolean, default: false },
      empower: { type: Boolean, default: false },
      other: { type: Boolean, default: false },
    },
    required: true,
  },
  otherReason: {
    type: String,
  },

  // Conference Attendance
  conferenceAttended: {
    type: String,
  },
  conferenceDetails: {
    type: String,
  },

  // Additional Information
  innovations: {
    type: String,
  },
  partnerships: {
    type: String,
  },
  successStories: {
    type: String,
  },
  additionalInfo: {
    type: String,
  },

  // Participants
  participants: [participantSchema],

  // Timestamps for record keeping (optional)
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FpoRegistration", FpoRegistrationSchema);
