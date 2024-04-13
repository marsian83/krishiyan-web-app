const mongoose = require("mongoose");

const reasonSchema = new mongoose.Schema({
  insights: { type: Boolean, default: false },
  connect: { type: Boolean, default: false },
  learn: { type: Boolean, default: false },
  opportunities: { type: Boolean, default: false },
  empower: { type: Boolean, default: false },
  other: { type: Boolean, default: false },
  otherReason: { type: String, default: "" },
});

const supportSchema = new mongoose.Schema({
  capacityBuilding: { type: Boolean, default: false },
  accessToFinance: { type: Boolean, default: false },
  marketLinkages: { type: Boolean, default: false },
  technicalAssistance: { type: Boolean, default: false },
  others: { type: Boolean, default: false },
  othersSupport: { type: String, default: "" },
});

const challengeSchema = new mongoose.Schema({
  weakFinancials: { type: Boolean, default: false },
  lackProfessionalManagement: { type: Boolean, default: false },
  inadequateAccessToCredit: { type: Boolean, default: false },
  lackRiskMitigationMechanisms: { type: Boolean, default: false },
  inadequateAccessToMarket: { type: Boolean, default: false },
  inadequateAccessToInfrastructure: { type: Boolean, default: false },
  lackTechnicalSkills: { type: Boolean, default: false },
  difficultiesInMarketingProduce: { type: Boolean, default: false },
  poorCapitalizationAndFundingScope: { type: Boolean, default: false },
  accessToFinanceInputsAndTechnology: { type: Boolean, default: false },
  increasedCompetitionFromExistingPrivateCompanies: {
    type: Boolean,
    default: false,
  },
  lackOfSelfSustainability: { type: Boolean, default: false },
  lackOfAdministrativeControls: { type: Boolean, default: false },
  lackOfProfessionalExpertise: { type: Boolean, default: false },
  lowInvolvementOfTheMembers: { type: Boolean, default: false },
  others: { type: Boolean, default: false },
  othersText: { type: String, default: "" },
});

const distributionSchema = new mongoose.Schema({
  localMarkets: { type: Boolean, default: false },
  supermarkets: { type: Boolean, default: false },
  exports: { type: Boolean, default: false },
  exhibitions: { type: Boolean, default: false },
  directCustomers: { type: Boolean, default: false },
  amazonFlipkart: { type: Boolean, default: false },
  ownWebsiteSelling: { type: Boolean, default: false },
});

const fporegisterSchema = new mongoose.Schema({
  fullName: { type: String, default: "" },
  position: { type: String, default: "" },
  experience: { type: String, default: "" },
  fpoName: { type: String, default: "" },
  fpoLocation: { type: String, default: "" },
  state: { type: String, default: "" },
  contactNumber: { type: String, default: "" },
  emailAddress: { type: String, default: "" },
  activeFarmerMembers: { type: String, default: "" },
  primaryProducts: { type: String, default: "" },
  operationalDuration: { type: String, default: "" },
  annualProduction: { type: String, default: "" },
  annualRevenue: { type: String, default: "" },
  percentageGrowthProduction: { type: String, default: "" },
  percentageGrowthRevenue: { type: String, default: "" },
});

const mainSchema = new mongoose.Schema({
  reasons: reasonSchema,
  conferenceAttended: { type: String, default: "" },
  conferenceDetails: { type: String, default: "" },
  supportNeeded: supportSchema,
  distributionChannels: distributionSchema,
  innovations: { type: String, default: "" },
  partnerships: { type: String, default: "" },
  successStories: { type: String, default: "" },
  additionalInfo: { type: String, default: "" },
  challenges: challengeSchema,
  fporegister: fporegisterSchema,
});

const DataModel = mongoose.model("Data", mainSchema);
module.exports = DataModel;
