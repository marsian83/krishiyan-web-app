import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as Api from "../../Services/Api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const OTPVerification = (props: any) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("xs");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // State to control dialog open/close

  const { open, handleClose } = props;

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const handleSubmit = async () => {
    try {
      // Send a POST request to your API to verify the OTP.
      const response = await axios.post(
        "http://localhost:5001/api/verify-otp",
        {
          phoneNumber,
          otp,
        }
      );
      if (response.data.success) {
        setVerificationStatus("OTP verified successfully.");
        handleClose();
      } else {
        setVerificationStatus("OTP verification failed.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      console.log(error);
      setVerificationStatus("Error verifying OTP.");
    }
  };

  // Use the 'open' state to control whether the dialog is open or closed
  return (
    <div>
      <Dialog
        open={open}
        // onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle id="alert-dialog-title">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{}}>
              Farmer Mobile OTP Verification
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="OTP"
                  name="otp"
                  autoComplete="email"
                  autoFocus
                  onChange={(e: any) => setOtp(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="mobile"
                  name="mobile"
                  autoComplete="mobile"
                  autoFocus
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                />
                <Button
                  //   type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Verify
                </Button>
                <p>{verificationStatus}</p>
              </Box>
              {/* Add a close button here */}
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OTPVerification;
