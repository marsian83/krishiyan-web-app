const mongoose = require("mongoose");

const SupportQuerySchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "farmer" },
    farmerId: mongoose.Types.ObjectId,
    query: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SupportQuery", SupportQuerySchema);
