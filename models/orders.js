const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    items: [
      {
        item: { type: Object, required: true },
      },
    ],
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Farmer",
    },
    dealer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Dealer",
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "payByCredit"],
      default: "NotPaid",
    },
    totalPrice: { type: Number, required: true },
    discountedPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
