const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Farmer = require("../models/farmer");
const User = require("../models/dealer");
const AuthGuard = require("../AuthGuard");
const ObjectId = require("mongoose").Types.ObjectId;

// ========================================== SALE =============================================================

//Create Product {Dealer specific product}
router.post("/create-inventory-product", AuthGuard, async (req, res) => {
  const information = req.body;
  const newProduct = new Product({
    ...information,
    createdBy: req.user,
  });
  try {
    await newProduct.save();
    res.status(201).json({
      message: "Product created!",
      item: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//Create Product {Uniform Products}
router.post("/create-uniform-product", AuthGuard, async (req, res) => {
  try {
  } catch (error) {}
});

//Get dealer products
router.get("/get-dealer-products", AuthGuard, async (req, res) => {
  try {
    const dealerId = req.user._id;
    const result = await User.aggregate([
      {
        $match: {
          _id: ObjectId(dealerId),
        },
      },
      {
        $lookup: {
          from: "products", //Must be collection name for products
          localField: "_id",
          foreignField: "createdBy",
          as: "Products",
        },
      },
    ]);
    if (result.length > 0) {
      res.send(result[0].Products);
    } else {
      res.status(404).send("Dealer not found");
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//Get All products
router.get("/get-inventory-products", async (req, res) => {
  try {
    // const page = parseInt(req.query.page) - 1 || 0;
    // const limit = parseInt(req.query.limit) || 3;
    // const search = req.query.search || "";
    // let sort = req.query.sort || "quantity";
    // let category = req.query.category || "All";
    // const fertilizerOptions = [
    //   "Fertilizer",
    //   "Pesticide",
    //   "Fungicide",
    //   "Herbicide",
    // ];
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//Add product to cart
router.post("/add-to-cart", async (req, res) => {
  const { farmerID, itemId } = req.body;
  if (!itemId) {
    const error = new Error("ItemId not provided");
    error.statusCode = 404;
    throw error;
  }
  try {
    let farmer = await Farmer.findById(farmerID);
    let itemToAdd = await Product.findById(itemId);
    if (itemToAdd) {
      farmer.addToCart(itemToAdd);
    }
    res
      .status(200)
      .json({ message: "Item successfully added to cart.", result: itemToAdd });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//Get farmer cart
router.post("/get-cart-items", async (req, res) => {
  const { farmerID } = req.body;
  Farmer.findById(farmerID)
    .then((account) => {
      return Farmer.findOne({ _id: account._id });
    })
    .then((farmer) => {
      return farmer.populate("cart.items.itemId");
    })
    .then((farmer) => {
      const cartItems = farmer.cart.items;
      let totalPrice = 0;
      cartItems.forEach((item) => {
        totalPrice = totalPrice + item.quantity * item.itemId.sellingPrice;
      });
      res.json({ cart: cartItems, totalPrice: totalPrice });
    })
    .catch((error) => {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    });
});

//Reduce item from cart
router.post("/reduce-cart-item", async (req, res) => {
  const { farmerID, itemId } = req.body;
  if (!itemId) {
    const error = new Error("ItemId not provided");
    error.statusCode = 404;
    throw error;
  }
  Farmer.findById(farmerID)
    .then((account) => {
      return Farmer.findOne({ _id: account._id });
    })
    .then((user) => {
      return user.reduceQuantity(itemId);
    })
    .then((result) => {
      res.status(200).json({ message: "Item successfully updated." });
    })
    .catch((error) => {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    });
});

//Remove Item from cart
router.post("/remove-cart-item", async (req, res) => {
  const { farmerID, itemId } = req.body;
  if (!itemId) {
    const error = new Error("ItemId not provided");
    error.statusCode = 404;
    throw error;
  }
  Farmer.findById(farmerID)
    .then((account) => {
      return Farmer.findOne({ _id: account._id });
    })
    .then((user) => {
      return user.removeFromCart(itemId);
    })
    .then((result) => {
      res.status(200).json({ message: "Item successfully removed from cart." });
    })
    .catch((error) => {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    });
});

// ========================================== INVENTORY ========================================================

// ========================================== PRODUCT ==========================================================

// ========================================== REPORT ===========================================================

// ========================================== SALES STATEMENT ==================================================

module.exports = router;
