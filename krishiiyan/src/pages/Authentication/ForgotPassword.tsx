import React, { useState } from "react";
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
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  //Handlesubmit
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/reset-password`,
        {
          email,
          newPassword,
        }
      );

      if (response.data.success) {
        setMessage(response.data.message);

        navigate("/login");
      } else {
        setMessage("Error resetting password. Please try again later.");
        toast.error("Error resetting password. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        if (error.response.status === 404) {
          setMessage("Email not found");
          toast.error("Email not found", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          setMessage("Error resetting password. Please try again later.");
          toast.error("Error resetting password. Please try again later.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else if (error.request) {
        setMessage("No response from the server. Please try again later.");
        toast.error("No response from the server. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setMessage("An unexpected error occurred. Please try again later.");
        toast.error("An unexpected error occurred. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              className="text-[#13490A] font-extrabold text-sm mx-5"
              type="email"
              margin="normal"
              required
              fullWidth
              name="email"
              label="email"
              id="email"
            />
            <TextField
              className="text-[#13490A] font-extrabold text-sm mx-5"
              type="password"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="newPass"
            />

            <Button
              className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              submit
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
      </Container>
    </>
  );
};

export default ForgotPassword;
