import * as axios from "axios";

const apiURL = "http://localhost:5001/api";
// const apiURL = "http://localhost:5001/api";

// "http://localhost:5001/api";   localhost
//http://35.77.226.139:5001/api   Production url

export interface AddProductRequestPayload {
  activeIngridient: string;
  tradeName: string;
  productDescription: string;
  category: string;
  measuringUnit: string;
  volume: Number;
  quantity: string;
  dateOfPurchase: any;
  expiryDate: string;
  MRP: string;
  procurementDiscout: string;
  searchKeywords: string[];
  crop: string[];
}

interface ResponseData {
  data: any;
  status: any;
}

function normalizeServerResponse(serverResponse: any) {
  let response: ResponseData = {
    data: serverResponse.data,
    status: serverResponse.status,
  };

  return response;
}

function normalizeServerError(serverResponse: any) {
  let response: ResponseData = {
    data: serverResponse.response?.data?.message,
    status: serverResponse.status,
  };

  return response;
}
// ========================================== DEALER AUTHENTICATION ====================================================================

//Register
export async function dealerRegistration(
  name: any,
  email: any,
  password: any,
  mobile: any
) {
  try {
    console.log(name, email, "object");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/auth/register`,
      data: {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
      },
    };
    const response = await axios.default.request(axiosConfig);
    console.log(response);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
//Login
export async function dealerLogin(email: any, password: any) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/auth/login`,
      data: {
        email: email,
        password: password,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get dealer profile
export async function getDealer() {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/auth/me`,
      headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
// ========================================== FARMER RELATIONAL MANAGEMENT ====================================================================

// ========================================== NEW FARMER REGISTRATION ====================================================================

export async function createFarmer(
  name: string,
  mobile: number,
  mobileIsWhatsapp: boolean,
  state: string,
  city: string,
  zip: string,
  street: string,
  totalLandArea: string,
  dealer_farmer_relation: string,
  plantation_type: string
) {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer`,
      data: {
        name: name,
        mobile: mobile,
        mobileIsWhatsapp: mobileIsWhatsapp,
        address: {
          state: state,
          city: city,
          zip: zip,
          street: street,
        },
        totalLandArea: totalLandArea,
        dealer_farmer_relation: dealer_farmer_relation,
        plantation_type: plantation_type,
      },
      headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Generate otp
export async function generateOtp(mobile: String) {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/generate-otp`,
      data: {
        mobile: mobile,
      },
      // headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Verify OTP
export async function verifyOtp(mobile: String, otp: String) {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/verify-otp`,
      data: {
        mobile: mobile,
        otp: otp,
      },
      // headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get farmer {By mobile}
export async function getFarmer(mobile: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/get-farmer-mobile`,
      data: {
        mobile: mobile,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
//Get farmer {By farmerId}
export async function getFarmerById(farmerId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/get-farmer`,
      data: {
        farmerId: farmerId,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get farmer location
export async function getFarmerLocation(pin: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/address`,
      data: {
        pincode: pin,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get farmer purchases
export async function getFarmerPurchases(farmerId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/get-farmer-purchase`,
      data: {
        farmerId: farmerId,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
// ========================================== FARMER CULTIVATION =======================================================================

//Create farmer cultivation data
export async function createFarmerCultivationData(
  farmerId: string,
  area: string,
  crop: string,
  variety: string,
  dateOfSowing: string,
  expireDateofSowing: String,
  months: Number,
  soilType: string,
  irrigationType: string,
  fertilizer: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/cultivation`,
      data: {
        farmerId: farmerId,
        area: area,
        crop: crop,
        variety: variety,
        dateOfSowing: dateOfSowing,
        expireDateofSowing,
        months: months,
        soilType: soilType,
        irrigationType: irrigationType,
        fertilizer: fertilizer,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get farmer cultivation data
export async function getFarmerCultivationData(farmerId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/cultivation-data`,
      data: {
        farmerId: farmerId,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

export async function updateHarvestStatus(
  cultivationId: string,
  harvestStatus: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/harvest-status`,
      data: {
        cultivationId,
        harvestStatus,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// mandi prices
export async function getMandiPrices() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001d9143fc81ac74bce7ad727abc2705a8a&format=json&limit=10000`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
// ========================================== FARMER CREDIT SYSTEM =======================================================================

//Farmer credit
export async function createFarmerCredit(
  creditAmount: string,
  eligibleAmount: string,
  reason: string,
  creditPeriod: string,
  interestRate: string,
  totalPayableAmount: string,
  dueDate: string,
  interestAmount: string,
  farmerId: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/credit`,
      data: {
        creditAmount: creditAmount,
        eligibleAmount: eligibleAmount,
        reason: reason,
        creditPeriod: creditPeriod,
        interestRate: interestRate,
        totalPayableAmount: totalPayableAmount,
        dueDate: dueDate,
        interestAmount: interestAmount,
        farmerId: farmerId,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get Farmer credits data
export async function getFarmerCreditData(
  farmerId: string
  // page: number,
  // rowPerPage: number
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/credits-data`,
      data: {
        farmerId: farmerId,
      },
      // params: {
      //   page: 1,
      //   size: rowPerPage,
      // },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// Get Farmer
export async function getFarmers() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/farmer/get-farmer`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get credit by ID
export async function getCreditTxInfo(creditNumber: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/credit-info`,
      data: {
        billNumber: creditNumber,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
//Credit amount info
export async function FarmerCreditAmountInfo(
  amn: string,
  period: string,
  rate: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/credit-amount-info`,
      data: {
        amount: amn,
        period: period,
        rate: rate,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get Farmer eligible amount
export async function farmerCreditLimit(farmerId: string, reasonId?: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/credit-eligible-amount`,
      data: {
        farmerId: farmerId,
        reasonId: reasonId,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Pay Credit
export async function payCredit(
  billNumber: string,
  payableAmount: string,
  paymentMethod: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/pay-credit`,
      data: {
        billNumber: billNumber,
        payableAmount: payableAmount,
        paymentMethod: paymentMethod,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Update payment status
export async function updatePaymentStatus(
  billNumber: string,
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/update-payment-status`,
      data: {
        billNumber: billNumber,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// ================ support =================
//Health created
export async function createFarmerSupportHealth(
  farmerId: string,
  crop: string,
  category: string,
  description: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/support/crop-health`,
      data: {
        farmerId: farmerId,
        crop: crop,
        category: category,
        description: description,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

export async function createFarmerQuery(farmerId: string, query: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/support/query`,
      data: {
        farmerId: farmerId,
        query: query,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

export async function createFarmerSuppotCredit(
  creditId: string,
  description: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/support/credit`,
      data: {
        creditId: creditId,
        description: description,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
// ========================================== CROP ADVISORY =============================================================================

//Get crops
export async function getCrops() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/crop`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// pest Api function
export async function getPestsByCropId(cropId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/pest/${cropId}`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// pesticide calculation Api function
export async function getPesticidesByPestId(pestId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/pesticide/${pestId}`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// weed api function
export async function getWeedsByCropId(cropId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/weed/${cropId}`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// herbicide calcuation

export async function getHerbicidesByWeedId(weedId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/herbicide/${weedId}`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// Diease api function
export async function getDiseaseByCropId(cropId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/disease/${cropId}`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// Fungicide calcuation

export async function getFungicideByDiseaseId(diseageId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/fungicide/${diseageId}`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get crops by name

export async function getCropsbyName(
  localName: String,
  scientficCrop: string,
  dateOfSowing: number | null = null
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/crop/get-crop-name`,
      data: {
        localName: localName,
        scientificName: scientficCrop,
        dateOfSowing,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get crop by local name and date

export async function getCropsbyCalendar(localName: String, createdAt: Date) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/crop/get-crop-calendar`,
      data: {
        localName: localName,
        createdAt: Date,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
//Create crops

//Calculator
export async function fertilizerCalculator(localName: string, area: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/crop/calculator`,
      data: {
        localName: localName,
        area: area,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//pesticide calculator
export async function pesticideCalculator(localName: string, area: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/crop/pesticide-calculator`,
      data: {
        localName: localName,
        area: area,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//herbicide and fungicide

export async function herbicideCalculator(localName: string, area: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/crop/fungicide-herbicide`,
      data: {
        localName: localName,
        area: area,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

export async function getvariteyByCropId(cropId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/yield-crop/${cropId}`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

export async function getCreditNumber() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/credit/`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// ============================================== POS ============================================================

// ============================================== SALE ===============================================================

//PRODUCTS TEMPLATE

//Get Admin Product Template.
export async function getProductTemplate() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/pos/get-product-template`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get dealer products
export async function getDealerProducts() {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/pos/get-dealer-products`,
      headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// Create products {Uniform}
export async function createUniformProduct(payload: AddProductRequestPayload) {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/create-uniform-product`,
      data: {
        activeIngridient: payload.activeIngridient,
        tradeName: payload.tradeName,
        productDescription: payload.productDescription,
        category: payload.category,
        measuringUnit: payload.measuringUnit,
        volume: payload.volume,
        quantity: payload.quantity,
        dateOfPurchase: payload.dateOfPurchase,
        expiryDate: payload.expiryDate,
        MRP: payload.MRP,
        procurementDiscount: payload.procurementDiscout,
        searchKeywords: payload.searchKeywords,
        crop: payload.crop,
      },
      headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Update expiry date of products
export async function updateExpiredProduct(productId: string) {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/update-expired-batches`,
      data: {
        productId: productId,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// Create products {Dealer specific}
export async function createDealerSpecificProduct(
  payload: AddProductRequestPayload
) {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/create-inventory-product`,
      data: {
        activeIngridient: payload.activeIngridient,
        tradeName: payload.tradeName,
        productDescription: payload.productDescription,
        category: payload.category,
        measuringUnit: payload.measuringUnit,
        volume: payload.volume,
        quantity: payload.quantity,
        dateOfPurchase: payload.dateOfPurchase,
        expiryDate: payload.expiryDate,
        MRP: payload.MRP,
        procurementDiscount: payload.procurementDiscout,
        searchKeywords: payload.searchKeywords,
        crop: payload.crop,
      },
      headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

// Get all products
export async function getProducts() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/pos/get-inventory-products`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get product by tradename
export async function getProductByTradename(tradeName: String) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/get-product-by-tradename`,
      data: {
        tradeName: tradeName,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get expired products
export async function getExpiredProducts() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/pos/get-expired-products`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get farmer recommended products {based on current cultivation}
export async function getRecommendedProducts(farmerId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/farmer-recommended-product`,
      data: {
        farmerID: farmerId,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Farmer Cart
//Add product to cart
export async function addtoCart(farmerID: string, itemID: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/add-to-cart`,
      data: {
        farmerID: farmerID,
        itemId: itemID,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Get farmer cart
export async function getFarmerCart(farmerID: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/get-cart-items`,
      data: {
        farmerID: farmerID,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Reduce cart item
export async function reduceCartItem(farmerID: string, itemID: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/reduce-cart-item`,
      data: {
        farmerID: farmerID,
        itemId: itemID,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Reduce cart item
export async function removeCartItem(farmerID: string, itemID: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/remove-cart-item`,
      data: {
        farmerID: farmerID,
        itemId: itemID,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Update product discount
export async function updateProductDiscount(
  productId: string,
  discountPercentage: string,
  quantity: any
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "put",
      url: `${apiURL}/pos/${productId}/discount`,
      data: {
        discount: discountPercentage,
        quantity: quantity,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Update product discount
export async function updateProductDisclaimer(
  productId: string,
  discountPercentage: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/${productId}/disclaimer`,
      data: {
        discount: discountPercentage,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
//Farmer purchase
export async function createFarmerOrder(
  items: [],
  farmerID: string,
  paymentStatus: string,
  totalPrice: string,
  discountedPrice: string
) {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/pos/create-farmer-order`,
      data: {
        items: items,
        totalPrice: totalPrice,
        customer: farmerID,
        paymentStatus: paymentStatus,
        discountedPrice: discountedPrice,
      },
      headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

//Dealer sales report
export async function getDealerReport() {
  try {
    let token: any = localStorage.getItem("authToken");
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/pos/dealer-sales-report`,
      headers: { Authorization: "Bearer " + token },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
