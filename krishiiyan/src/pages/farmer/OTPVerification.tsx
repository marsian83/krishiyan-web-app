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

  const [phoneNumber, setPhoneNumber] = useState(props.phone || "");

  const { open, handleClose } = props;

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/verify-otp`,
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

  return (
    <div>
      <Dialog open={open} fullWidth={fullWidth} maxWidth={maxWidth}>
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
                  autoComplete="otp"
                  autoFocus
                  onChange={(e: any) => setOtp(e.target.value)}
                />
                {/* Use the 'phoneNumber' state for the value of this TextField */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile or Email"
                  name="mobile"
                  autoComplete="mobile"
                  autoFocus
                  value={phoneNumber}
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Verify
                </Button>
                <p>{verificationStatus}</p>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OTPVerification;
