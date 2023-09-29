import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useNavigate } from "react-router-dom";
import * as Api from "../../Services/Api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleOauthLogin from "../../Components/Auth/GoogleLogin";
import { useState } from "react";

import OTPVerification from "../farmer/OTPVerification";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();
  const [messageSent, setMessageSent] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let Phone = 0;
  let check = false;
  let email1 = "";
  const handleEmailChange = (event: any) => {
    email1 = event.target.value;
    console.log(email1);
  };
  const handleMobileChange = (event: any) => {
    Phone = event.target.value;
    console.log(Phone);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOtpSubmit = async (event: any) => {
    event.preventDefault();

    console.log(Phone);

    if (Phone != null) {
      console.log("Please enter a valid phone number");
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/send-sms`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Phone }),
          }
        );

        if (response.ok) {
          console.log("SMS sent successfully!");
          setMessageSent(true);
          handleOpen();
          check = true;
          console.log(check);
        } else {
          // Handle error case
          setMessageSent(false);
        }
      } catch (error) {
        console.error("Error sending SMS:", error);
      }
    }
    if (email1 != null) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/send-otp-email`, {
          email1,
        })
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {
          setMessage("Error: Email could not be sent.");
        });
    }
  };

  const [isOtpVerified, setIsOtpVerified] = useState(false);

  //Handlesubmit
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let name = data.get("name");
    let email = data.get("email");
    let pass = data.get("password");
    let mobile = data.get("phone");
    console.log(check);
    const [err, res] = await Api.dealerRegistration(name, email, pass, mobile);

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (res && check) {
      localStorage.setItem("authToken", res?.data?.token);
      localStorage.setItem("dealerName", res?.data?.result?.name);
      navigate("/");
      toast.success("Register Success !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleOTPVerified = () => {
    setIsOtpVerified(true);
    handleClose();
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <img
          src="Images/logo.png"
          alt="Ellipse"
          className="mb-[50%] my-5 lg:w-10 xl:w-14 flex flex-col items-center"
        />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              className="text-[#13490A] font-extrabold text-sm mx-5"
              type="text"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="email"
              autoFocus
            />
            <TextField
              className="text-[#13490A] font-extrabold text-sm mx-5"
              type="email"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
            />
            <TextField
              className="text-[#13490A] font-extrabold text-sm mx-5"
              type="password"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
            />

            <TextField
              className="text-[#13490A] font-extrabold text-sm mx-5"
              type="phone"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone Number (e.g 9835717655)"
              id="phone"
              autoComplete="current-phone"
              onChange={handleMobileChange}
            />

            <Button
              className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Already have an account? {""}
                  <Link
                    variant="subtitle2"
                    onClick={() => navigate("/login")}
                    sx={{ cursor: "pointer" }}
                  >
                    Sign In
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <GoogleOauthLogin />
        <Button
          className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleOtpSubmit}
        >
          Send OTP
        </Button>

        {/* OTP Verification Component */}
        <OTPVerification
          open={open}
          handleClose={handleClose}
          handleOTPVerified={handleOTPVerified}
          Phone={Phone}
        />
      </Container>
      {/* <div className="min-h-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full bg-[#50d71e]">
        <div className="max-w-md w-full">
          <Header
            heading="Signup to create an account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/login"
          />
          <Register />
        </div>
      </div> */}
    </>
  );
};

export default SignupPage;
