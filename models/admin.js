const { mongoose } = require("mongoose");

const adminSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Dealer" },
  active: { type: Boolean, default: true },
  isSuperAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("Admin", adminSchema);
