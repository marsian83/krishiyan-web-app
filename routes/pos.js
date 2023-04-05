const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// ========================================== SALE =============================================================

//Create Product
router.post("/create-inventory-product", async (req, res) => {
  const information = req.body;
  const newProduct = new Product({
    ...information,
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

//Get All products
router.get("/get-inventory-products", async (req, res) => {
  try {
    // const products = await Product.find({});
    // res.status(200).json({
    //   success: "true",
    //   data: products,
    // });
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 3;
    const search = req.query.search || "";
    let sort = req.query.sort || "quantity";
    let category = req.query.category || "All";

    const fertilizerOptions = [
      "Fertilizer",
      "Pesticide",
      "Fungicide",
      "Herbicide",
    ];


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//Add product to cart

//Get farmer cart

//Remove item from cart

// ========================================== INVENTORY ========================================================

// ========================================== PRODUCT ==========================================================

// ========================================== REPORT ===========================================================

// ========================================== SALES STATEMENT ==================================================

module.exports = router;
