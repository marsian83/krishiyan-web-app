const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Farmer = require("../models/farmer");
const User = require("../models/dealer");
const Order = require("../models/orders");
const ProductAdminTemplate = require("../models/productAdminTemplate");
const Cultivation = require("../models/farmerCultivation");
const AuthGuard = require("../AuthGuard");
const ObjectId = require("mongoose").Types.ObjectId;
const moment = require("moment");

// ========================================== SALE =============================================================

//Get farmer recommended product {Based on current cultivation}
router.post("/farmer-recommended-product", async (req, res) => {
  const { farmerID } = req.body;
  try {
    let farmer = await Farmer.findById(farmerID);
    let currentCultivationID =
      farmer.cultivationData[farmer.cultivationData.length - 1];
    let farmerCurrentCultivation = await Cultivation.findById(
      currentCultivationID
    );
    let farmerCurrentCultivationCrop = farmerCurrentCultivation.crop;
    let products = await Product.find({});
    let recommendedProducts = [
      {
        productId: "",
        productName: "",
        productPrice: "",
        productDescription: "",
        MRP: "",
      },
    ];
    for (let i = 0; i < products.length; i++) {
      if (products[i].crop.includes(farmerCurrentCultivationCrop)) {
        recommendedProducts.push({
          productId: products[i]._id,
          productName: products[i].tradeName,
          productPrice: products[i].sellingPrice,
          productDescription: products[i].productDescription,
          MRP: products[i].MRP,
        });
      }
    }
    res.status(200).json({
      CurrentCultivation: farmerCurrentCultivationCrop,
      RecommendedProducts: recommendedProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//FARMER CART
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
        totalPrice = totalPrice + item.quantity * item?.itemId?.sellingPrice;
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

//FARMER PURCHASES {Billings}

//Create farmer purchase
router.post("/create-farmer-order", AuthGuard, async (req, res) => {
  const { items, customer, paymentStatus, totalPrice } = req.body;
  try {
    let farmer = await Farmer.findById(customer);
    const newOrder = await Order.create({
      items: items.map((x) => ({
        item: x.itemId,
      })),
      customer: customer,
      dealer: req.body.items[0].itemId.createdBy,
      paymentStatus: paymentStatus,
      totalPrice,
    });
    res.status(201).send({ message: "New Order Created", newOrder });
    if (farmer) {
      farmer.clearCart();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//Get farmer purchases
router.post("/get-farmer-purchase", async (req, res) => {
  const { farmerId } = req.body;
  try {
    const orders = await Order.find({ customer: farmerId });
    res.send(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ========================================== INVENTORY ========================================================

//PRODUCTS ADMIN TEMPLATE {Handled by Admin}
// ==> CREATE
router.post("/admin/create-inventory-product", async (req, res) => {
  const {
    activeIngridient,
    tradeName,
    productDescription,
    category,
    measuringUnit,
    volume,
    MRP,
    searchKeywords,
    crop,
  } = req.body;
  try {
    const newProduct = await ProductAdminTemplate.create({
      activeIngridient,
      tradeName,
      productDescription,
      category,
      measuringUnit,
      volume,
      quantity: "0",
      dateOfPurchase: new Date(),
      expiryDate: new Date(),
      MRP,
      procurementDiscout: "0",
      procuredPrice: "0",
      saleDiscout: "0",
      sellingPrice: "0",
      searchKeywords,
      productType: "uniform", //uniform,dealer-specific
      crop,
    });

    res.status(201).json({ newProduct, message: "Created successfully!" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==> GET
router.get("/get-product-template", async (req, res) => {
  try {
    const template = await ProductAdminTemplate.find({});
    res.status(200).json({
      ProductTemplate: template,
      message: "success",
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
  const {
    activeIngridient,
    tradeName,
    productDescription,
    category,
    measuringUnit,
    volume,
    quantity,
    dateOfPurchase,
    expiryDate,
    MRP,
    procurementDiscout,
    sellingPrice,
    searchKeywords,
    crop,
  } = req.body;
  try {
    let procured_price = MRP - (procurementDiscout / 100) * MRP;
    let sale_discount = procurementDiscout - 10;
    let minimum_selling_price = MRP - (sale_discount / 100) * MRP;
    let total_procured_amount = quantity * procured_price;

    //Assign Batch
    const oldProduct = await Product.findOne({ tradeName });
    console.log(oldProduct, "oldProduct");
    let count = "1";
    if (!oldProduct) {
      let product_batch_new_product = {
        batchName: `Batch-${moment(dateOfPurchase).format("YYYY")}-${count}`,
        quantity: quantity,
        productName: tradeName,
        purchaseDate: dateOfPurchase,
        expiryDate: expiryDate,
      };

      const batch = [product_batch_new_product];

      const newProduct = await Product.create({
        activeIngridient,
        tradeName,
        productDescription,
        category,
        measuringUnit,
        volume,
        quantity: quantity,
        dateOfPurchase: dateOfPurchase,
        expiryDate: expiryDate,
        MRP,
        MSP: minimum_selling_price,
        procurementDiscout: procurementDiscout,
        procuredPrice: procured_price,
        saleDiscout: sale_discount,
        sellingPrice: sellingPrice,
        searchKeywords: searchKeywords.split(","),
        productType: "uniform", //uniform,dealer-specific
        crop: crop.split(","),
        createdBy: req.user,
        totalProcuredAmount: total_procured_amount,
        batches: batch,
      });
    }

    if (oldProduct) {
      let previous_product = oldProduct.batches[oldProduct.batches.length - 1];
      let purchase_date_year = moment(dateOfPurchase).format("YYYY");
      let old_product_purchase_year = moment(
        previous_product.purchaseDate
      ).format("YYYY");
      if (oldProduct) {
        let batch_name;
        if (purchase_date_year === old_product_purchase_year) {
          let previous_batch_name = previous_product.batchName.split("-");
          let batch_number =
            parseInt(previous_batch_name[previous_batch_name.length - 1]) + 1;
          batch_name = `Batch-${moment(dateOfPurchase).format(
            "YYYY"
          )}-${batch_number}`;
        }
        let product_batch_old_product = {
          batchName: batch_name,
          quantity: quantity,
          productName: tradeName,
          purchaseDate: dateOfPurchase,
          expiryDate: expiryDate,
        };
        oldProduct.batches.push(product_batch_old_product);
        await oldProduct.save();
      }
    }
    function sum_reducer(accumulator, currentValue) {
      return accumulator + currentValue;
    }
    //Update product quantity
    const productId = oldProduct._id;
    let updateProductField = {};
    let products_quantity = oldProduct.batches.map((q) => parseInt(q.quantity));

    let updatedProductQuantity = products_quantity.reduce(sum_reducer);
    updateProductField.quantity = updatedProductQuantity;
    let updateProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { $set: updateProductField },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    //Update dealer {excel_data_download field}
    const dealerId = req.user._id;
    let updateFields = {};
    updateFields.excel_data_download = true;
    let user = await User.findOneAndUpdate(
      { _id: dealerId },
      { $set: updateFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(201).json({ message: "Created successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
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

//Get all expired products
router.get("/get-expired-products", async (req, res) => {
  try {
    const expiredProducts = await Product.find({ expiryDate: { $lt: Date.now() } });
    res.json(expiredProducts);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
// ========================================== PRODUCT ==========================================================

//Create Product {Dealer specific product}
router.post("/create-inventory-product", AuthGuard, async (req, res) => {
  const {
    activeIngridient,
    tradeName,
    productDescription,
    category,
    measuringUnit,
    volume,
    quantity,
    dateOfPurchase,
    expiryDate,
    MRP,
    procurementDiscout,
    sellingPrice,
    searchKeywords,
    crop,
  } = req.body;
  try {
    let procured_price = MRP - (procurementDiscout / 100) * MRP;
    let sale_discount = procurementDiscout - 10;
    let minimum_selling_price = MRP - (sale_discount / 100) * MRP;
    let total_procured_amount = quantity * procured_price;

    const newProduct = await Product.create({
      activeIngridient,
      tradeName,
      productDescription,
      category,
      measuringUnit,
      volume,
      quantity: quantity,
      dateOfPurchase: dateOfPurchase,
      expiryDate: expiryDate,
      MRP,
      MSP: minimum_selling_price,
      procurementDiscout: procurementDiscout,
      procuredPrice: procured_price,
      saleDiscout: sale_discount,
      sellingPrice: sellingPrice,
      searchKeywords: searchKeywords.split(","),
      productType: "dealer-specific", //uniform,dealer-specific
      crop: crop.split(","),
      createdBy: req.user,
      totalProcuredAmount: total_procured_amount,
    });
    res.status(201).json({ newProduct, message: "Created successfully!" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * MRP - ₹1000
 * Procurement Discount - 30%
 * Procured Price - (30% of MRP) => ₹700
 * Sales Discount - (Procurement Discount - 10) => 20%
 * Minimum Sale Price(MSP) - (20% of MRP) => ₹800
 */

/**
 * Disclaimer:
 * Selling Price < MSP => You are selling at low price.
 * Selling Price = Procured Price => You are selling at low margin.
 * Selling Price < Procured Price => You are selling at loss.
 */

// ========================================== REPORT ===========================================================

// Get total sales,current inventory value && total Tx
router.get("/dealer-sales-report", AuthGuard, async (req, res) => {
  try {
    let orders = await Order.find({ dealer: req.user._id });

    //Calculate Total sales
    const totalSales = orders.reduce(
      (total, sale) => total + sale.totalPrice,
      0
    );

    //Calculate Daily sales
    const result = await Order.aggregate([
      {
        $match: {
          _id: ObjectId(req.user._id),
          date: {
            $gte: new Date("2023-04-01"),
            $lt: new Date("2024-04-20"),
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          totalSaleAmount: {
            $sum: { $multiply: ["$totalPrice", "$quantity"] },
          },
          averageQuantity: { $avg: "$quantity" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { totalSaleAmount: -1 },
      },
    ]);

    //Calculate Inventory Total Price
    let dealer_inventory = await Product.find({ createdBy: req.user._id });
    const totalInventoryValue = dealer_inventory.reduce(
      (total, inventory) => total + inventory.MRP * inventory.quantity,
      0
    );
    //Product wise sales
    let product_category = orders.map((order) => {
      let category = order.items.map((c) => c.item.category);
      return category;
    });

    res.status(200).json({
      TotalOrders: orders,
      TotalSales: totalSales,
      DailySales: result,
      TotalInventoryValue: totalInventoryValue,
      product_category: product_category,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ========================================== SALES STATEMENT ==================================================

// Get sales statement B/W two given dates {Start & End Date}
router.post("/sales-statement", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;

//Calculate Product batch
function ProductBatch(productTradeName, purchaseDate) {}
