const express = require("express");
const router = express.Router();
const moment = require("moment");
const Farmer = require("../models/farmer");
const FarmerCultivation = require("../models/farmerCultivation");
const Credit = require("../models/credit");
const axios = require("axios");
const credit = require("../models/credit");
const Crop = require("../models/crop");
const { findByIdAndUpdate } = require("../models/farmer");
// const AuthGuard = require("../AuthGuard");
const twilio = require("twilio");

let TWILIO_ACCOUNT_SID = "ACf1cd2c3e9ecf3b33e11709a596697914";
let TWILIO_AUTH_TOKEN = "452dc7e974edf61d86e825a7f2282422";
let TWILIO_SERVICE_SID = "MG2887157943e920597f4caa10317f0479";
let TWILIO_PHONE_NUMBER = "+12762779759";

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
console.log(client);

function generateRandom(min, max) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}

// ========================================== NEW FARMER REGISTRATION ====================================================================

//Create a farmer
router.post("/", AuthGuard, async (req, res) => {
  //AuthGuard
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
      creditLimit: generateRandom(1, 50000),
      createdBy: req.user,
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
// router.post("/", AuthGuard, async (req, res) => {
//   const {
//     name,
//     mobile,
//     mobileIsWhatsapp,
//     address,
//     totalLandArea,
//     dealer_farmer_relation,
//     plantation_type,
//   } = req.body;
//   try {
//     const oldFarmer = await Farmer.findOne({ mobile });
//     if (oldFarmer)
//       return res.status(400).json({ message: "Farmer already exists" });
//     const newFarmer = new Farmer({
//       name,
//       mobile,
//       mobileIsWhatsapp,
//       address,
//       totalLandArea,
//       dealer_farmer_relation,
//       plantation_type,
//       createdBy: req.user,
//     });
//     const farmer = await newFarmer.save();
//     res.json(farmer);
//   } catch (err) {
//     if (err.status === 401) {
//       console.log("User not authenticated:", err.message);
//     } else {
//       console.log("Unexpected error:", err.message);
//     }
//     res.status(err.status || 500).json({
//       message: err.message,
//     });
//   }
// });

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

router.post("/get-farmer", async (req, res) => {
  const { farmerId } = req.body;
  try {
    const farmer = await Farmer.findById(farmerId);
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

//Mobile otp verification
// Generate OTP

router.post("/generate-otp", async (req, res) => {
  try {
    const { mobile } = req.body;
    if (!mobile) return res.status(500).json({ message: "Enter phone number" });
    const farmer = await Farmer.findOne({ mobile });

    // Generate an OTP using the Twilio API
    const otp = Math.floor(100000 + Math.random() * 900000);
    client.messages
      .create({
        body: `Your OTP is ${otp}`,
        from: TWILIO_PHONE_NUMBER,
        to: `+${mobile}`,
      })
      .then((message) => {
        console.log(message.sid, phone_number);
      })
      .catch((error) => console.log(error));
    let updateFarmerField = {};
    updateFarmerField.otp = otp;
    let updatedFarmer = await Farmer.findOneAndUpdate(
      { _id: farmer._id },
      { $set: updateFarmerField },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json({ message: "OTP sent successfully", OTP: otp });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});

//Verify Otp
router.post("/verify-otp", async (req, res) => {
  try {
    const { mobile, otp } = req.body;
    const farmer = await Farmer.findOne({ mobile });
    if (!farmer) {
      return res.status(401).json({ message: "Farmer not found" });
    }
    if (farmer.otp !== otp) {
      return res.status(401).json({ message: "Invalid OTP" });
    }
    let updateFields = {};
    updateFields.phone_number_verified = true;
    let updatedFarmer = await Farmer.findOneAndUpdate(
      { _id: farmer._id },
      { $set: updateFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json({
      message: "OTP verified successfully",
      User: updatedFarmer,
    });
  } catch (error) {
    console.log(error);
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
    months,
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
      months,
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
    farmerCultivationData.forEach(async (cultivation) => {
      const crop = await Crop.findOne({ localName: cultivation.crop });
      const cropCycle = crop.cropCycle;
      const diffTime = Math.abs(new Date() - cultivation.dateOfSowing);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > parseInt(cropCycle)) {
        cultivation.harvestStatus = "Done";
        await cultivation.save();
      }
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

// update harvest status
router.post("/harvest-status", async (req, res) => {
  try {
    const { cultivationId, harvestStatus } = req.body;
    const cultivation = await FarmerCultivation.findById(cultivationId);
    if (!cultivation)
      return res.status(400).json({ msg: "Cultivation does not exist." });

    cultivation.harvestStatus = harvestStatus;
    await cultivation.save();
    res.json({ message: "Status updated successfully." });
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
// farmer credit manegement

router.post("/credit-eligible-amount", async (req, res) => {
  try {
    const { farmerId, reasonId } = req.body;
    const farmer = await Farmer.findById(farmerId);
    if (!farmer) return res.status(400).json({ msg: "Farmer does not exist." });

    const farmer_current_cultivation_data = await FarmerCultivation.findById(
      reasonId
    );

    let cost_cultivation =
      parseInt(farmer_current_cultivation_data.costOfCultivationPerAcre) *
      parseInt(farmer_current_cultivation_data.area);

    let futurePrice = farmer_current_cultivation_data.FuturePrice;
    let area_rating = 0;
    let farmer_credit_score_rating = farmer.dealer_farmer_relation;
    let farmerArea = farmer.totalLandArea;
    let time_of_sowing_rating = 0;

    if (futurePrice <= 14000) {
      future_price_rating = 0.5;
    } else if (futurePrice === 14001 || futurePrice === 20000) {
      future_price_rating = 1;
    } else {
      future_price_rating = 1.5;
    }

    if (parseInt(farmerArea) < 2.5) {
      area_rating = 0.5;
    } else if (parseInt(farmerArea) < 2.6 || parseInt(farmerArea) == 5) {
      area_rating = 1;
    } else {
      area_rating = 1.5;
    }

    const Month = farmer_current_cultivation_data.dateOfSowing.getMonth() + 1;
    const Day = farmer_current_cultivation_data.dateOfSowing.getDate();

    if (Month == 1) {
      time_of_sowing_rating = 0.5;
    } else if (Month == 2) {
      if (Day <= 14) {
        time_of_sowing_rating = 1;
      } else {
        time_of_sowing_rating = 1.5;
      }
    } else if (Month == 3) {
      if (Day < 16) {
        time_of_sowing_rating = 1.5;
      } else {
        time_of_sowing_rating = 1;
      }
    } else if (Month == 4) {
      time_of_sowing_rating = 0.5;
    } else if (Month == 5) {
      time_of_sowing_rating = 0.5;
    } else if (Month == 6) {
      if (Day <= 14) {
        time_of_sowing_rating = 1;
      } else {
        time_of_sowing_rating = 1.5;
      }
    } else if (Month == 7) {
      if (Day < 16) {
        time_of_sowing_rating = 1.5;
      } else {
        time_of_sowing_rating = 1;
      }
    } else if (Month == 8) {
      time_of_sowing_rating = 0.5;
    } else if (Month == 9) {
      if (Day <= 14) {
        time_of_sowing_rating = 0.5;
      } else {
        time_of_sowing_rating = 1;
      }
    } else if (Month == 10) {
      time_of_sowing_rating = 1.5;
    } else if (Month == 11) {
      if (Day <= 15) {
        time_of_sowing_rating = 1.5;
      } else {
        time_of_sowing_rating = 1;
      }
    } else if (Month == 12) {
      time_of_sowing_rating = 0.5;
    }

    const average_rating =
      (time_of_sowing_rating +
        future_price_rating +
        area_rating +
        farmer_credit_score_rating) /
      4;
    let percentage = 0;
    if (average_rating <= 0.5) {
      percentage = 15;
    } else if (average_rating == 0.6 || average_rating == 1) {
      percentage = 25;
    } else {
      percentage = 35;
    }

    return res.json({
      eligibleAmount: (cost_cultivation * percentage) / 100,
    });
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

// const calculateMonthlyInterest = function (p, r, n) {
//   // let rate = (r * p) / 100;
//   let rate = r / 12 / 100;
//   let interest = (
//     (p * rate * Math.pow(1 + rate, n)) /
//     (Math.pow(1 + rate, n) - 1)
//   ).toFixed(4);
//   const totalPayableAmount = interest * n;
//   const totalInterestAmount = totalPayableAmount - p;

//   return {
//     MonthlyInterest: interest,
//     TotalPayableAmount: totalPayableAmount.toFixed(4),
//     TotalInterestAmount: totalInterestAmount.toFixed(4),
//   };
// };

// //Calculate Interest rate amount on eligible amount
// router.post("/credit-amount-info", async (req, res) => {
//   const { amount, period, rate, reason } = req.body;
//   try {
//     // let total_payable_amount = calculateInterestAmount(amount, period, rate, 3);
//     // let interest_amount = total_payable_amount - amount;
//     const status = await Farmer.findOne({ reason });

//     let InterestInfo = calculateMonthlyInterest(amount, rate, period);

//     //Due Date
//     function addMonths(date, months) {
//       date.setMonth(date.getMonth() + months);
//       return date;
//     }
//     let due_date = addMonths(new Date(), period);

//     res.status(200).json({
//       TotalPayableAmount: InterestInfo.TotalPayableAmount,
//       InterestAmount: InterestInfo.TotalInterestAmount,
//       DueDate: moment(due_date).format("DD/MM/YYYY"),
//       LoanEMI: InterestInfo.MonthlyInterest,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: error,
//     });
//   }
// });

// let rate = r / 12; // convert annual rate to monthly rate
// let interest = (
//   (p * rate * Math.pow(1 + rate, n)) /
//   (Math.pow(1 + rate, n) - 1)
// ).toFixed(4);
// console.log(interest);
// const totalPayableAmount = (interest * n).toFixed(4);
// const totalInterestAmount = (totalPayableAmount - p).toFixed(4);

// const totalPayableAmount = (p * (1 + (r / 100) * (n / 12))).toFixed(4);
const calculateMonthlyInterest = function (p, r, n) {
  const totalPayableAmount = (p * (1 + (r / 100) * (n / 12))).toFixed(4);
  // const totalPayableAmount = (p + (p * r * n) / 1200).toFixed(4);
  const totalInterestAmount = (totalPayableAmount - p).toFixed(4) * Number(12);
  const interest = 1;

  return {
    MonthlyInterest: interest,
    // TotalPayableAmount: totalPayableAmount,
    // TotalInterestAmount: Number(totalInterestAmount) * Number(12),
    TotalInterestAmount: totalInterestAmount,
    TotalPayableAmount: Number(p) + Number(totalInterestAmount),
    PrincipalAmount: p,
    EMI: Number(totalInterestAmount) / Number(12),
  };
};

//Calculate Interest rate amount on eligible amount
router.post("/credit-amount-info", async (req, res) => {
  const { amount, period, rate, reason } = req.body;
  try {
    const status = await Farmer.findOne({ reason });

    let InterestInfo = calculateMonthlyInterest(
      parseFloat(amount),
      parseFloat(rate),
      parseInt(period)
    );

    console.log({ InterestInfo });

    //Due Date
    function addMonths(date, monthsToAdd) {
      if (isNaN(monthsToAdd)) return date;
      let months = date.getMonth();
      let year = date.getFullYear();
      months += monthsToAdd;
      if (months > 11) {
        year += Math.floor(months / 12);
        months = months % 12;
      }
      date.setMonth(months);
      date.setFullYear(year);
      return date;
    }
    let due_date = addMonths(new Date(), parseInt(period));

    res.status(200).json({
      InterestDetails: InterestInfo,
      TotalPayableAmount: InterestInfo.TotalPayableAmount,
      InterestAmount: InterestInfo.TotalInterestAmount,
      DueDate: due_date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
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
router.post("/credit", async (req, res, next) => {
  try {
    const {
      creditAmount,
      eligibleAmount,
      reason,
      creditPeriod,
      interestRate,
      totalPayableAmount,
      dueDate,
      interestAmount,
      farmerId,
    } = req.body;
    if (typeof reason !== "string" || reason.trim().length === 0) {
      return res.status(400).json({
        message: "Please fill Reason",
      });
    }
    const farmer = await Farmer.findById(farmerId);
    if (!farmer)
      return res.status(400).json({ message: "Farmer does not exist." });

    //Check previous sanctioned credit is paid or not.
    let previousCreditId = farmer.creditData[farmer.creditData.length - 1];
    let previousCreditData = await Credit.findById(previousCreditId);
    if (previousCreditData) {
      if (
        previousCreditData.paymentStatus === "UNPAID" ||
        previousCreditData.paymentStatus === "PARTIAL_PAID"
      ) {
        return res
          .status(400)
          .json({ message: "Your previous payment is remaining." });
      } else {
        // next()
      }
    }

    if (eligibleAmount < creditAmount || eligibleAmount < totalPayableAmount)
      return res.status(500).json({
        message: `Your maximum credit limit is ${eligibleAmount}`,
      });
    const bill_number = Math.floor(100000 + Math.random() * 900000);

    const newcreditData = new Credit({
      creditAmount,
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
    console.log(error);
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
    console.log({ credit });
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
    const page = req.query.page;
    const size = req.query.size ? parseInt(req.query.size) : 10;
    const skip = (page - 1) * size;
    const total = await Credit.countDocuments()
      .where("_id")
      .in(farmer.creditData);

    let farmerCreditData = await Credit.find()
      .where("_id")
      .in(farmer.creditData);
    res.json({ farmerCreditData, total });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// router.get("/credits-bill", async (req, res) => {
//   try {
//     const { farmerId } = req.body;
//     const farmer = await Farmer.findById(farmerId);
//     if (!farmer) return res.status(400).json({ msg: "Farmer does not exist." });
//     let farmerCreditData = await Credit.find()
//       .where("_id")
//       .in(farmer.creditData);

//     res.json({ farmerCreditData });
//   } catch (error) {
//     res.status(500).json({
//       message: error,
//     });
//   }
// });

// router.post("/credits-bill", async (req, res) => {
//   try {
//     const { farmerId } = req.body;
//     const farmer = await Farmer.findById(farmerId);
//     if (!farmer) return res.status(400).json({ msg: "Farmer does not exist." });
//     let farmerCreditData = await Credit.find({
//       _id: { $in: farmer.creditData },
//       status: { $in: ["PARTIAL_PAID"] },
//     });
//     res.json({ farmerCreditData });
//   } catch (error) {
//     res.status(500).json({
//       message: error,
//     });
//   }
// });

//Pay Credit
// router.post("/pay-credit", async (req, res) => {
//   try {
//     const { billNumber, payableAmount, paymentMethod } = req.body;
//     const credit = await Credit.findOne({ billNumber });
//     if (!credit) return res.status(404).json({ msg: "Tx not found" });

//     let payment_status;
//     let total_paid_amount;
//     let remaining_payable_amount;
//     let interest_amount;

//     if (payableAmount === credit.totalPayableAmount) {
//       payment_status = "PAID";
//     } else if (payableAmount === 0) {
//       payment_status = "UNPAID";
//     } else if (
//       payableAmount !== credit.totalPayableAmount &&
//       payableAmount != 0
//     ) {
//       payment_status = "PARTIAL_PAID";
//       let start_date = new Date();
//       let payment_date = moment(start_date).format("DD/MM/YYYY");
//       let payment_due_date = credit.dueDate;

//       var dateRegex = /\d+/g;
//       var date1Array = payment_date.match(dateRegex);
//       var date2Array = payment_due_date.match(dateRegex);

//       var startDate = new Date(date1Array[2], date1Array[1], date1Array[0]);
//       var endDate = new Date(date2Array[2], date2Array[1], date2Array[0]);

//       var diffResult = Math.round(
//         (endDate - startDate) / (1000 * 60 * 60 * 24)
//       );

//       var months = Math.floor(diffResult / 30);

//       let pricipal_amount =
//         Number(credit.totalPayableAmount) - Number(payableAmount);

//       let pricipal_rate = credit.interestRate;

//       let InterestInfo = calculateMonthlyInterest(
//         pricipal_amount,
//         pricipal_rate,
//         months
//       );
//       total_paid_amount = Number(credit.paidAmount) + Number(payableAmount);
//       remaining_payable_amount = InterestInfo.TotalPayableAmount;
//       interest_amount = InterestInfo.TotalInterestAmount;
//     }
//     let updateCreditInfoFields = {};
//     updateCreditInfoFields.paymentStatus = payment_status;
//     updateCreditInfoFields.remainingPayableAmount = remaining_payable_amount;
//     updateCreditInfoFields.paymentMethod = paymentMethod;
//     updateCreditInfoFields.interestAmount = interest_amount;
//     updateCreditInfoFields.paidAmount = total_paid_amount;

//     let updateCreditInfo = await Credit.findByIdAndUpdate(
//       { _id: credit._id },
//       { $set: updateCreditInfoFields },
//       { new: true, upsert: true, setDefaultsOnInsert: true }
//     );
//     console.log(updateCreditInfo, "updateCreditInfo");
//     res.send(updateCreditInfo);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error,
//     });
//   }
// });
router.post("/pay-credit", async (req, res) => {
  try {
    const { billNumber, payableAmount, paymentMethod } = req.body;
    const credit = await Credit.findOne({ billNumber });
    if (!credit) return res.status(404).json({ msg: "Tx not found" });

    let payment_status;
    let total_paid_amount;
    let remaining_payable_amount;
    let interest_amount;

    if (
      payableAmount === credit.totalPayableAmount ||
      payableAmount === credit.remainingPayableAmount ||
      credit.remainingPayableAmount === "0"
    ) {
      payment_status = "PAID";
    } else if (payableAmount === 0) {
      payment_status = "UNPAID";
    } else if (
      (payableAmount !== credit.totalPayableAmount && payableAmount != 0) ||
      0.0
    ) {
      payment_status = "PARTIAL_PAID";
      let start_date = new Date();
      let payment_date = moment(start_date).format("DD/MM/YYYY");
      let payment_due_date = credit.dueDate;

      // remaining_payable_amount = credit.totalPayableAmount - payableAmount;
      if (credit.remainingPayableAmount) {
        remaining_payable_amount =
          credit.remainingPayableAmount - payableAmount;
        // console.log(remaining_payable_amount, "remaining_payable_amount");
        // 0.00
      } else {
        remaining_payable_amount = credit.totalPayableAmount - payableAmount;
        console.log(remaining_payable_amount, "remaining_payable_amount");
      }

      // var dateRegex = /\d+/g;
      // var date1Array = payment_date.match(dateRegex);
      // var date2Array = payment_due_date.match(dateRegex);

      // var startDate = new Date(date1Array[2], date1Array[1], date1Array[0]);
      // var endDate = new Date(date2Array[2], date2Array[1], date2Array[0]);

      // var diffResult = Math.round(
      //   (endDate - startDate) / (1000 * 60 * 60 * 24)
      // );

      // var months = Math.floor(diffResult / 30);

      // let pricipal_amount =
      //   Number(credit.totalPayableAmount) - Number(payableAmount);
      // if (isNaN(pricipal_amount)) {
      //   pricipal_amount = payableAmount;
      // }

      // let pricipal_rate = credit.interestRate;
      // if (isNaN(pricipal_rate)) {
      //   pricipal_rate = payableAmount;
      // }

      // let InterestInfo = calculateMonthlyInterest(
      //   pricipal_amount,
      //   pricipal_rate,
      //   months
      // );
      // if (isNaN(InterestInfo.TotalPayableAmount)) {
      //   InterestInfo.TotalPayableAmount = 0;
      // }

      total_paid_amount = Number(credit.paidAmount) + Number(payableAmount);
      if (isNaN(total_paid_amount)) {
        total_paid_amount = 0;
      }

      // remaining_payable_amount = InterestInfo.TotalPayableAmount;
      // if (isNaN(remaining_payable_amount)) {
      //   remaining_payable_amount = 0;
      // }

      // interest_amount = InterestInfo.TotalInterestAmount;
      // if (isNaN(interest_amount)) {
      //   interest_amount = 0;
      // }
    }
    if (credit.remainingPayableAmount === "0") {
      payment_status = "PAID";
    }
    let updateCreditInfoFields = {};
    updateCreditInfoFields.paymentStatus = payment_status;
    updateCreditInfoFields.remainingPayableAmount = remaining_payable_amount;
    updateCreditInfoFields.paymentMethod = paymentMethod;
    updateCreditInfoFields.interestAmount = interest_amount;
    updateCreditInfoFields.paidAmount = total_paid_amount;

    let updateCreditInfo = await Credit.findByIdAndUpdate(
      { _id: credit._id },
      { $set: updateCreditInfoFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    // console.log(updateCreditInfo, "updateCreditInfo");
    res.send(updateCreditInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});

//update credit payment status
router.post("/update-payment-status", async (req, res) => {
  try {
    const { billNumber } = req.body;
    const credit = await Credit.findOne({ billNumber });
    if (!credit) return res.status(404).json({ msg: "Tx not found" });
    let payment_status;
    let updateCreditInfoFields = {};
    if (credit.remainingPayableAmount === "0") {
      payment_status = "PAID";
    }
    updateCreditInfoFields.paymentStatus = payment_status;
    let updateCreditInfo = await Credit.findByIdAndUpdate(
      { _id: credit._id },
      { $set: updateCreditInfoFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    console.log(updateCreditInfo, "updateCreditInfo");
    res.send(updateCreditInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
