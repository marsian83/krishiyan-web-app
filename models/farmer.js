const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressInfo = {
  state: String,
  city: String,
  zip: String,
  street: String,
};

const FarmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      unique: true,
      required: true,
    },
    mobileIsWhatsapp: {
      type: Boolean,
      required: true,
      default: false,
    },
    phone_number_verified: {
      type: Boolean,
      default: false,
    },
    otp: String,
    address: addressInfo,
    totalLandArea: {
      type: Number,
      required: true,
    },
    dealer_farmer_relation: {
      type: Number,
    },
    plantation_type: {
      type: String,
      enum: ["ORGANIC", "NON-ORGANIC", "BOTH"],
      default: "NON-ORGANIC",
    },
    cultivationData: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "FarmerCultivation",
      },
    ],
    creditData: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Credit",
      },
    ],
    creditLimit: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Dealer",
    },
    cart: {
      items: [
        {
          _id: false,
          itemId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

//Add to cart
FarmerSchema.methods.addToCart = function (item) {
  const cartItemIndex = this.cart.items.findIndex((cp) => {
    return cp.itemId.toString() === item._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartItemIndex >= 0) {
    newQuantity = this.cart.items[cartItemIndex].quantity + 1;
    updatedCartItems[cartItemIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      itemId: item._id,
      quantity: newQuantity,
    });
  }
  const updatedCart = {
    items: updatedCartItems,
  };
  this.cart = updatedCart;
  return this.save();
};

//Reduce quantity
FarmerSchema.methods.reduceQuantity = function (itemId) {
  const newCart = this.cart.items.map((item) => {
    if (item.itemId.toString() === itemId.toString())
      return {
        ...item.toObject(),
        quantity: item.quantity - 1,
      };
    return item.toObject();
  });
  const finalNewCart = newCart.filter((item) => {
    return item.quantity > 0;
  });
  this.cart.items = finalNewCart;
  return this.save();
};

//Remove item from cart
FarmerSchema.methods.removeFromCart = function (itemId) {
  const updatedCartItems = this.cart.items.filter((item) => {
    return item.itemId.toString() !== itemId.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save();
};

//Clear cart
FarmerSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
};

module.exports = mongoose.model("Farmer", FarmerSchema);
