import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import * as Api from "../../Services/Api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleOauthLogin from "../../Components/Auth/GoogleLogin";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import OTPVerification from "../farmer/OTPVerification";

let check = false;
let check1 = false;

const SignupPage = () => {
  const navigate = useNavigate();
  const [messageSent, setMessageSent] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let Phone = 0;

  let email1 = "";
  const validateEmail = (email: string) => {
    const validDomains = ["@gmail.com", "@krishiyan.com", "info@"];

    for (const domain of validDomains) {
      if (email.includes(domain)) {
        check1 = true;
        console.log("check 1 ", check1);
      }
      console.log("check 1 ", check1);
    }
  };
  const handleEmailChange = (event: any) => {
    email1 = event.target.value;
    console.log(email1);
    check1 = false;
    validateEmail(email1);
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

    // if (Phone != null) {
    //   console.log("Please enter a valid phone number");
    //   try {
    //     const response = await fetch(
    //       `${process.env.REACT_APP_BACKEND_URL}/sendsms`,
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ Phone }),
    //       }
    //     );

    //     if (response.ok) {
    //       console.log("SMS sent successfully!");
    //       setMessageSent(true);
    //       handleOpen();
    //       check = true;
    //       console.log(check);
    //     } else {
    //       // Handle error case
    //       setMessageSent(false);
    //     }
    //   } catch (error) {
    //     console.error("Error sending SMS:", error);
    //   }
    // }
    if (email1 != null) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/send-otp-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email1 }),
          }
        );
        if (response.ok) {
          console.log("SMS sent successfully!");
          handleOpen();
          console.log("check before", check);
          check = true;
          console.log("check after", check);
        } else {
          console.log("Error sending SMS: froentend from else");
        }
      } catch (error) {
        console.error("Error sending SMS:", error);
      }
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

    if (res && check && check1) {
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
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            <TextField
              className="p-2 mt-8 rounded-xl border"
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
              className="p-2 rounded-xl border"
              type="email"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
              inputProps={{
                pattern: "^(\\w+@(gmail\\.com|info|krishiyan\\.com|contact))?$",
                title:
                  "Please enter a valid email address with domains @gmail.com, @info, or @krishiyan.com",
              }}
            />
            <TextField
              className="p-2 rounded-xl border"
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
              className="p-2 rounded-xl border"
              type="tel"
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
              className="bg-[#05AB2A] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-5 w-full"
              fullWidth
              variant="contained"
              onClick={handleOtpSubmit}
            >
              Send OTP
            </Button>
            <Button
              className="bg-[#05AB2A] rounded-xl text-white py-2 hover:scale-105 duration-300"
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item>
                <Typography variant="body2">
                  Already have an account?{" "}
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
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="Images/logo.png" alt="Ellipse" />
        </div>
      </div>

      <OTPVerification
        open={open}
        handleClose={handleClose}
        handleOTPVerified={handleOTPVerified}
        Phone={email1}
      />
    </section>
  );
};

export default SignupPage;
