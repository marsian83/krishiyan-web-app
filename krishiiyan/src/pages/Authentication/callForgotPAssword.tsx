import React, { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

const SendEmailPage = () => {
  const [email, setEmail] = useState("");
  const encryptionKey: string = process.env.REACT_APP_ENCRYPTION_KEY || "";

  const handleSendEmail = async () => {
    try {
      const encryptedEmail = CryptoJS.AES.encrypt(
        email,
        encryptionKey
      ).toString();

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/send-reset-password-link`,
        { email: email }
      );

      toast.success("Reset password link sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error sending reset password link:", error);

      toast.error("Error sending reset link", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">
            Send Reset Password Link
          </h2>
          <p className="text-xs mt-4 text-[#002D74]">
            Enter your email to receive a reset password link
          </p>

          <form>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
              onClick={handleSendEmail}
            >
              Reset Password
            </Button>

            <Grid container>
              <Grid item>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Remember your password? {""}
                  <Link
                    variant="subtitle2"
                    onClick={() => navigate("/login")}
                    sx={{ cursor: "pointer" }}
                  >
                    {" Login"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>

        <div className="md:block hidden w-1/2 ">
          <img className="rounded-2xl" src="Images/login.webp" alt="Login" />
        </div>
      </div>
    </section>
  );
};

export default SendEmailPage;
