const { mongoose } = require("mongoose");

const superAdmin = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Dealer" },
  active: { type: Boolean, default: true },
});
