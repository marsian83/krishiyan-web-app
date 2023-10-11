const { exec } = require("child_process");
const OTP = require("../models/Otp");

// Function to generate a random 6-digit OTP
function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

function runCurlCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      if (stderr) {
        reject(`stderr : \n${stderr}`);
      }
      resolve(`stdout: \n${stdout}`);
    });
  });
}

async function sendSMS(phoneNumber) {
  try {
    // Generate a random OTP
    const otp = generateOTP();

    const message = `OTP for Farmer Registration on KrishiYan WebApp is ${otp} and valid for 10 minutes. Do not share this OTP with anyone for security reasons - Wetacre Sustainable Solutions LLP.`;

    const url = `http://api.bulksmsgateway.in/sendmessage.php?user=Krishiyan&password=Krishiyan@2023&mobile=${Number(
      phoneNumber
    )}&message=${encodeURIComponent(
      message
    )}&sender=WSSLLP&type=3&template_id=1407168745602569024`;

    const cmd = `curl "${url}"`;

    console.log(url);
    console.log(otp);
    console.log(phoneNumber + "from the send sms");
    const phone = Number(phoneNumber);
    console.log(phone);
    const otpEntry = new OTP({ phoneNumber, otp }); //otpEntry is a document of OTP model
    await otpEntry.save();
    console.log("From the send SMS");
    console.log(otpEntry);
    runCurlCommand(cmd)
      .catch((err) => {
        console.error(err);
      })
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while sending SMS");
  }
}

module.exports = sendSMS;
