const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    activeIngridient: {
      type: String,
      required: true,
      unique: true,
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
    MSP: {
      type: String,
      required: true,
    },
    procurementDiscout: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Dealer",
    },
    procuredPrice:{
      type:String,
    },
    saleDiscout: {
      type: String,
      required: true,
    },
    sellingPrice:{
      type: String,
      required: true,
    },
    searchKeywords:{
      type:[String],
      required: true
    },
    productType:{ //uniform/dealer-specific 
      type: String,
      required: true,
    },
    crop:{
      type:[],
      required: true
    },
    totalProcuredAmount:{
      type: String,
      required: true,
    },
    batches:[
      {
        batchName:String,
        quantity:String,
        productName:String,
        purchaseDate:Date,
        expiryDate:Date
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
