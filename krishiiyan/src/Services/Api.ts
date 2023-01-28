import * as axios from "axios";

const apiURL ="http://35.77.226.139:5001/api"

// "http://localhost:5000/api";

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
    data: serverResponse.response.data.message,
    status: serverResponse.status,
  };

  return response;
}
// ========================================== FARMER RELATIONAL MANAGEMENT ====================================================================

// ========================================== NEW FARMER REGISTRATION ====================================================================

//Create Farmer
export async function createFarmer(
  name: string,
  mobile: number,
  mobileIsWhatsapp: boolean,
  state: string,
  city: string,
  zip: string,
  cultivationData: []
) {
  try {
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
        },
        // cultivationData: cultivationData,
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

//Get farmer
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
// ========================================== FARMER CULTIVATION =======================================================================

//Create farmer cultivation data
export async function createFarmerCultivationData(
  farmerId: string,
  area: string,
  areaCode: string,
  areaType: string,
  crop: string,
  variety: string,
  dateOfSowing: string,
  adoptedSeason: string,
  currentStage: string,
  slotNumber: string
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/cultivation`,
      data: {
        farmerId: farmerId,
        area: area,
        areaCode: areaCode,
        areaType: areaType,
        crop: crop,
        variety: variety,
        dateOfSowing: dateOfSowing,
        adoptedSeason: adoptedSeason,
        currentStage: currentStage,
        slotNumber: slotNumber,
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

// ========================================== FARMER CREDIT SYSTEM =======================================================================

//Farmer credit
export async function createFarmerCredit(
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
export async function getFarmerCreditData(farmerId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/credits-data`,
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
export async function farmerCreditLimit(farmerId: string) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/farmer/credit-eligible-amount`,
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
