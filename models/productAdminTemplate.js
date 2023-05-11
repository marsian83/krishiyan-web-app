const mongoose = require("mongoose");

const ProductAdminTemplateSchema = new mongoose.Schema(
  {
    activeIngridient: {
      type: String,
      required: true,
    },
    tradeName: {
      type: String,
      required: true,
      unique: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Fertilizer",
        "Pesticide",
        "Fungicide",
        "Herbicide",
        "Seeds",
        "GrowthPromoter",
      ],
      required: true,
    },
    measuringUnit: {
      type: String,
      required: true,
    },
    volume: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    dateOfPurchase: {
      type: Date,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    MRP: {
      type: String,
      required: true,
    },
    procurementDiscount: {
      type: String,
      required: true,
    },
    searchKeywords: {
      type: [String],
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    crop: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ProductAdminTemplate",
  ProductAdminTemplateSchema
);
