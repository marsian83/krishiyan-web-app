const appFarmer = require("../models/appFarmer");
const CropCultivation = require("../models/appCropCultivation");
// Register a new farmer
exports.registerFarmer = async (req, res) => {
  try {
    const {
      dealerNumber,
      name,
      whatsappNumber,
      totalOwnedFarm,
      geoLocationOwnedFarm,
      totalLeaseFarm,
      geoLocationLeaseFarm,
      pincode,
      village,
      district,
      state,
      address,
      typeOfCultivationPractice,
      bankName,
      accountName,
      accountNumber,
      ifscCode,
      pan,
      aadhaarNumber,
    } = req.body;

    const newFarmer = new appFarmer({
      dealerNumber,
      name,
      whatsappNumber,
      totalOwnedFarm,
      geoLocationOwnedFarm,
      totalLeaseFarm,
      geoLocationLeaseFarm,
      pincode,
      village,
      district,
      state,
      address,
      typeOfCultivationPractice,
      bankName,
      accountName,
      accountNumber,
      ifscCode,
      pan,
      aadhaarNumber,
    });

    await newFarmer.save();

    res.status(201).send({
      success: true,
      message: "Farmer registered successfully",
      data: { farmer: newFarmer },
    });
  } catch (error) {
    console.error("Error registering farmer:", error);
    res.status(400).send({
      success: false,
      message: "Error registering farmer",
      error: {
        code: "FARMER_REGISTRATION_ERROR",
        description: error.message,
      },
    });
  }
};

// Get all registered farmers
exports.getFarmers = async (req, res) => {
  try {
    const appfarmers = await appFarmer.find();
    res.status(200).send({
      success: true,
      message: "Farmers retrieved successfully",
      data: appfarmers,
    });
  } catch (error) {
    console.error("Error retrieving farmers:", error);
    res.status(400).send({
      success: false,
      message: "Error retrieving farmers",
      error: {
        code: "FARMERS_RETRIEVAL_ERROR",
        description: error.message,
      },
    });
  }
};

// Get farmers' names by dealer number
exports.getFarmerNamesByDealer = async (req, res) => {
  try {
    const { dealerNumber } = req.params;
    const farmers = await appFarmer.find({ dealerNumber }, "name");

    if (!farmers.length) {
      return res.status(404).send({
        success: false,
        message: "No farmers found for this dealer number",
        error: {
          code: "FARMERS_NOT_FOUND",
          description: "No farmers associated with this dealer number.",
        },
      });
    }

    res.status(200).send({
      success: true,
      message: "Farmers' names retrieved successfully",
      data: farmers,
    });
  } catch (error) {
    console.error("Error retrieving farmers' names:", error);
    res.status(400).send({
      success: false,
      message: "Error retrieving farmers' names",
      error: {
        code: "FARMER_NAMES_RETRIEVAL_ERROR",
        description: error.message,
      },
    });
  }
};

// Get all farmer data by dealer number
exports.getFarmerDataByDealer = async (req, res) => {
  try {
    const { dealerNumber } = req.params;
    const farmers = await appFarmer.find({ dealerNumber });

    if (!farmers.length) {
      return res.status(404).send({
        success: false,
        message: "No farmers found for this dealer number",
        error: {
          code: "FARMERS_NOT_FOUND",
          description: "No farmers associated with this dealer number.",
        },
      });
    }

    res.status(200).send({
      success: true,
      message: "Farmers' data retrieved successfully",
      data: farmers,
    });
  } catch (error) {
    console.error("Error retrieving farmers' data:", error);
    res.status(400).send({
      success: false,
      message: "Error retrieving farmers' data",
      error: {
        code: "FARMER_DATA_RETRIEVAL_ERROR",
        description: error.message,
      },
    });
  }
};

// Register crop cultivation data
exports.registerCropCultivation = async (req, res) => {
  try {
    const {
      fid,
      farmerName,
      crops,
      variety,
      dateOfSowing,
      geolocation,
      typeOfCultivationPractice,
      areaInAcres,
      geoLinkAreaOnMap,
    } = req.body;

    const newCropCultivation = new CropCultivation({
      fid,
      farmerName,
      crops,
      variety,
      dateOfSowing,
      geolocation,
      typeOfCultivationPractice,
      areaInAcres,
      geoLinkAreaOnMap,
    });

    await newCropCultivation.save();

    res.status(201).send({
      success: true,
      message: "Crop cultivation data registered successfully",
      data: { cropCultivation: newCropCultivation },
    });
  } catch (error) {
    console.error("Error registering crop cultivation data:", error);
    res.status(400).send({
      success: false,
      message: "Error registering crop cultivation data",
      error: {
        code: "CROP_CULTIVATION_REGISTRATION_ERROR",
        description: error.message,
      },
    });
  }
};

// Get all crop cultivation data
exports.getCropCultivations = async (req, res) => {
  try {
    const cropCultivations = await CropCultivation.find();
    res.status(200).send({
      success: true,
      message: "Crop cultivation data retrieved successfully",
      data: cropCultivations,
    });
  } catch (error) {
    console.error("Error retrieving crop cultivation data:", error);
    res.status(400).send({
      success: false,
      message: "Error retrieving crop cultivation data",
      error: {
        code: "CROP_CULTIVATION_RETRIEVAL_ERROR",
        description: error.message,
      },
    });
  }
};

// Get crop cultivation data by Fid
exports.getCropCultivationByFid = async (req, res) => {
  try {
    const { fid } = req.params;
    const cropCultivation = await CropCultivation.findOne({ fid });

    if (!cropCultivation) {
      return res.status(404).send({
        success: false,
        message: "No crop cultivation data found for this Fid",
        error: {
          code: "CROP_CULTIVATION_NOT_FOUND",
          description: "No crop cultivation data associated with this Fid.",
        },
      });
    }

    res.status(200).send({
      success: true,
      message: "Crop cultivation data retrieved successfully",
      data: cropCultivation,
    });
  } catch (error) {
    console.error("Error retrieving crop cultivation data by Fid:", error);
    res.status(400).send({
      success: false,
      message: "Error retrieving crop cultivation data by Fid",
      error: {
        code: "CROP_CULTIVATION_BY_FID_RETRIEVAL_ERROR",
        description: error.message,
      },
    });
  }
};
