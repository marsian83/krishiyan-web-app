const mongoose = require("mongoose");

const CreditSchema = new mongoose.Schema(
  {
    eligibleAmount: {
      type: String,
      required: true,
    },
    creditAmount: {
      type: String,
      required: true,
      default: "0",
    },
    reason: {
      type: String,
      required: true,
    },
    billNumber: {
      type: String,
      required: true,
    },
    creditPeriod: {
      type: String,
      required: true,
    },
    interestRate: {
      type: String,
      required: true,
    },
    totalPayableAmount: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    interestAmount: {
      type: String,
      required: true,
    },
    paidAmount: {
      type: String,
      required: true,
    },
    farmerId: mongoose.Types.ObjectId,
    paymentStatus: {
      type: String,
      enum: ["PAID", "UNPAID", "PARTIAL_PAID"],
      default: "UNPAID",
    },
    paymentMethod: {
      type: String,
    },
    paidAmount: {
      type: String,
    },
    remainingPayableAmount: {
      type: String,
      // default:"0"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Credit", CreditSchema);
