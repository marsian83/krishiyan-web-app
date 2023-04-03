const express = require("express");
const router = express.Router();
const moment = require("moment");
const Farmer = require("../models/farmer");
const FarmerCultivation = require("../models/farmerCultivation");
const Credit = require("../models/credit");
const axios = require("axios");
const credit = require("../models/credit");
const { findByIdAndUpdate } = require("../models/farmer");

// ========================================== NEW FARMER REGISTRATION ====================================================================

//Create a farmer
router.post("/", async (req, res) => {
  const {
    name,
    mobile,
    mobileIsWhatsapp,
    address,
    totalLandArea,
    dealer_farmer_relation,
    plantation_type,
  } = req.body;
  try {
    const oldFarmer = await Farmer.findOne({ mobile });
    console.log(oldFarmer);
    if (oldFarmer)
      return res.status(400).json({ message: "Farmer already exists" });
    const newFarmer = new Farmer({
      name,
      mobile,
      mobileIsWhatsapp,
      address,
      totalLandArea,
      dealer_farmer_relation,
      plantation_type,
    });
    const farmer = await newFarmer.save();
    res.json(farmer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: err,
    });
  }
});

//Get farmer address by its pincode  `http://postalpincode.in/api/pincode/${pincode}`
router.post("/address", async (req, res) => {
  const { pincode } = req.body;
  const options = {
    method: "GET",
    url: `http://postalpincode.in/api/pincode/${pincode}`,
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(500).json({
        message: error,
      });
    });
});

//Find farmer by mobile
router.post("/get-farmer-mobile", async (req, res) => {
  try {
    const { mobile } = req.body;
    const farmer = await Farmer.findOne({ mobile });
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
router.get("/get-farmer", async (req, res) => {
  try {
    const farmer = await Farmer.find();
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// ========================================== FARMER CULTIVATION =======================================================================

//Create new cultivation data
router.post("/cultivation", async (req, res) => {
  const {
    area,
    crop,
    variety,
    dateOfSowing,
    soilType,
    irrigationType,
    fertilizer,
    farmerId,
  } = req.body;
  try {
    const cultivationData = await Farmer.findById(farmerId);
    if (!cultivationData)
      return res.status(400).json({ msg: "Farmer does not exist." });
    const newcultivationData = new FarmerCultivation({
      area,
      crop,
      variety,
      dateOfSowing,
      soilType,
      irrigationType,
      fertilizer,
      farmerId,
    });

    await Farmer.findOneAndUpdate(
      { _id: farmerId },
      {
        $push: { cultivationData: newcultivationData },
      },
      { new: true }
    );

    await newcultivationData.save();

    res.json({ newcultivationData });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

// Find and update cultivation Done and Inprogress

router.post("/update-cultivation/:id", async (req, res) => {
  try {
    const newcultivation = await FarmerCultivation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(newcultivation);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

//Find farmer cultivation data
router.post("/cultivation-data", async (req, res) => {
  try {
    const { farmerId } = req.body;
    const farmer = await Farmer.findById(farmerId);
    if (!farmer) return res.status(400).json({ msg: "Farmer does not exist." });

    let farmerCultivationData = await FarmerCultivation.find()
      .where("_id")
      .in(farmer.cultivationData);
    res.json({ farmerCultivationData });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

// ========================================== FARMER CREDIT SYSTEM =======================================================================

//Calculate Eligible Amount

function calculateCreditAmount(
  area,
  costOfCultivation,
  season,
  futurePrice,
  creditScore
) {
  let expected_revenue = area * Number(costOfCultivation);
  let season_rating;
  let future_price_rating;
  let total_rating_percent;

  if (season === "kharif") {
    season_rating = 0.5;
  } else if (season === "rabi") {
    season_rating = 0.2;
  } else if (season === "rainy") {
    season_rating = 0.8;
  }

  if (futurePrice < "14000") {
    future_price_rating = 0.5;
  } else if (futurePrice === "14000" || futurePrice === "20000") {
    future_price_rating = 0.7;
  } else if (futurePrice > "20000") {
    future_price_rating = 1;
  }

  let total_rating = season_rating + future_price_rating + creditScore;

  if (total_rating < 1) {
    total_rating_percent = 20;
  } else if (total_rating === 1) {
    total_rating_percent = 25;
  } else if (total_rating > 1) {
    total_rating_percent = 40;
  }

  let amount = (expected_revenue / 100) * total_rating_percent;

  return Number(amount);
}

router.post("/credit-eligible-amount", async (req, res) => {
  try {
    const { farmerId } = req.body;
    const farmer = await Farmer.findById(farmerId);
    if (!farmer) return res.status(400).json({ msg: "Farmer does not exist." });

    let farmer_current_cultivation_id =
      farmer.cultivationData[farmer.cultivationData.length - 1];
    const farmer_current_cultivation_data = await FarmerCultivation.findById(
      farmer_current_cultivation_id
    );
    let cost_of_cultivation = "20000"; //By crop db // Need to make this value dynamic
    let credit_score = 0.3; //Gave by dealer {0.1 - 1} // Need to make this value dynamic

    let eligible_amount = calculateCreditAmount(
      farmer_current_cultivation_data.area,
      cost_of_cultivation,
      farmer_current_cultivation_data.adoptedSeason,
      cost_of_cultivation,
      credit_score
    );

    let updateFields = {};
    updateFields.creditLimit = eligible_amount;
    let updateFarmer = await Farmer.findOneAndUpdate(
      { _id: farmerId },
      { $set: updateFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).send({ message: "Success!", updateFarmer });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

//calculate Interest Amount

// var calculateInterestAmount = function (
//   total,
//   years,
//   ratePercent,
//   roundToPlaces
// ) {
//   var interestRate = ratePercent / 100 + 1;
//   return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
// };

const calculateMonthlyInterest = function (p, r, n) {
  let rate = r / 12 / 100;
  let interest = (
    (p * rate * Math.pow(1 + rate, n)) /
    (Math.pow(1 + rate, n) - 1)
  ).toFixed(4);
  const totalPayableAmount = interest * n;
  const totalInterestAmount = totalPayableAmount - p;

  return {
    MonthlyInterest: interest,
    TotalPayableAmount: totalPayableAmount.toFixed(4),
    TotalInterestAmount: totalInterestAmount.toFixed(4),
  };
};

//Calculate Interest rate amount on eligible amount
router.post("/credit-amount-info", async (req, res) => {
  const { amount, period, rate, reason } = req.body;
  try {
    // let total_payable_amount = calculateInterestAmount(amount, period, rate, 3);
    // let interest_amount = total_payable_amount - amount;
    const status = await Farmer.findOne({ reason });

    let InterestInfo = calculateMonthlyInterest(amount, rate, period);

    //Due Date
    function addMonths(date, months) {
      date.setMonth(date.getMonth() + months);
      return date;
    }
    let due_date = addMonths(new Date(), period);

    res.status(200).json({
      TotalPayableAmount: InterestInfo.TotalPayableAmount,
      InterestAmount: InterestInfo.TotalInterestAmount,
      DueDate: moment(due_date).format("DD/MM/YYYY"),
      LoanEMI: InterestInfo.MonthlyInterest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
});

//New credit {Sanction credit to farmer}
router.post("/credit", async (req, res) => {
  try {
    const {
      eligibleAmount,
      reason,
      creditPeriod,
      interestRate,
      totalPayableAmount,
      dueDate,
      interestAmount,
      farmerId,
    } = req.body;
    const farmer = await Farmer.findById(farmerId);
    if (!farmer)
      return res.status(400).json({ message: "Farmer does not exist." });

    if (farmer.creditLimit < eligibleAmount)
      return res.status(500).json({
        message: `Your maximum credit limit is ${farmer.creditLimit}`,
      });
    const bill_number = Math.floor(100000 + Math.random() * 900000);

    const newcreditData = new Credit({
      eligibleAmount,
      reason,
      billNumber: bill_number,
      creditPeriod,
      interestRate,
      totalPayableAmount,
      dueDate,
      interestAmount,
      farmerId,
    });

    await Farmer.findOneAndUpdate(
      { _id: farmerId },
      {
        $push: { creditData: newcreditData },
      },
      { new: true }
    );

    await newcreditData.save();

    res.json({ newcreditData });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

//Find credit by ID
router.post("/credit-info", async (req, res) => {
  try {
    const { billNumber } = req.body;
    const credit = await Credit.findOne({ billNumber });
    if (!credit) return res.status(404).json({ msg: "Tx not found" });
    res.json({ credit });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

//Get Farmer credits
router.post("/credits-data", async (req, res) => {
  try {
    const { farmerId } = req.body;
    const farmer = await Farmer.findById(farmerId);
    if (!farmer) return res.status(400).json({ msg: "Farmer does not exist." });

    console.log(farmer.creditData);

    let farmerCreditData = await Credit.find()
      .where("_id")
      .in(farmer.creditData);
    res.json({ farmerCreditData });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

//Pay Credit
router.post("/pay-credit", async (req, res) => {
  try {
    const { billNumber, payableAmount, paymentMethod } = req.body;
    const credit = await Credit.findOne({ billNumber });
    if (!credit) return res.status(404).json({ msg: "Tx not found" });

    let payment_status;
    let remaining_payable_amount;
    let interest_amount;

    if (payableAmount === credit.totalPayableAmount) {
      payment_status = "PAID";
    } else if (payableAmount === 0) {
      payment_status = "UNPAID";
    } else if (
      payableAmount !== credit.totalPayableAmount &&
      payableAmount != 0
    ) {
      payment_status = "PARTIAL_PAID";
      let start_date = new Date();
      let payment_date = moment(start_date).format("DD/MM/YYYY");
      let payment_due_date = credit.dueDate;

      var dateRegex = /\d+/g;
      var date1Array = payment_date.match(dateRegex);
      var date2Array = payment_due_date.match(dateRegex);

      var startDate = new Date(date1Array[2], date1Array[1], date1Array[0]);
      var endDate = new Date(date2Array[2], date2Array[1], date2Array[0]);

      var diffResult = Math.round(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
      );

      var months = Math.floor(diffResult / 30);

      let pricipal_amount =
        Number(credit.totalPayableAmount) - Number(payableAmount);

      let pricipal_rate = credit.interestRate;

      let InterestInfo = calculateMonthlyInterest(
        pricipal_amount,
        pricipal_rate,
        months
      );

      remaining_payable_amount = InterestInfo.TotalPayableAmount;
      interest_amount = InterestInfo.TotalInterestAmount;
    }
    let updateCreditInfoFields = {};
    updateCreditInfoFields.paymentStatus = payment_status;
    updateCreditInfoFields.remainingPayableAmount = remaining_payable_amount;
    updateCreditInfoFields.paymentMethod = paymentMethod;
    updateCreditInfoFields.interestAmount = interest_amount;

    let updateCreditInfo = await Credit.findByIdAndUpdate(
      { _id: credit._id },
      { $set: updateCreditInfoFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.send(updateCreditInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
