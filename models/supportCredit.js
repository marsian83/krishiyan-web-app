const mongoose = require("mongoose");

const SupportCreditSchema = new mongoose.Schema(
  {
    credit: { type: mongoose.Schema.Types.ObjectId, ref: "Credit" },
    creditId: mongoose.Types.ObjectId,
    description: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SupportCredit", SupportCreditSchema);
