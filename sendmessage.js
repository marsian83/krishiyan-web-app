const axios = require("axios");

exports.callApi = async (METHOD, URL, BODY) => {
  try {
    const options = {
      method: METHOD,
      url: URL,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      data: BODY,
    };

    const response = await axios(options);
    console.log("Response", response.data);
    return response;
  } catch (error) {
    console.error("API Call Error:", error);
    throw error;
  }
};

exports.sendSMS = async (toNumbers, rawMessage) => {
  const url = "https://api.textlocal.in/send/";
  const sender = "600010";
  const encoded_message = encodeURIComponent(rawMessage);
  const apiKey = "NDg0MjQ0NzY2ZjRkNjg1MDc0NTA3YTRiMzYzMjc1MzE="; // Use environment variable for API key

  const body = {
    apikey: apiKey,
    numbers: toNumbers.join(","),
    sender: sender,
    message: encoded_message,
  };

  console.log("Body", body);

  try {
    const result = await this.callApi("POST", url, body);
    return result;
  } catch (error) {
    console.error("SMS Sending Error:", error);
    throw error;
  }
};
