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

const OTPVerification = (props: any) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("xs");

  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
    const [err, res] = await Api.verifyOtp(props.Phone, otp);
    if (err) {
      toast.error(err.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      console.log({ res });
      toast.success(res?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      props.handleClose();
    }
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
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
                <Button
                  //   type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Verify
                </Button>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OTPVerification;
