import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import CryptoJS from "crypto-js";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  //const encryptionKey: string = process.env.REACT_APP_ENCRYPTION_KEY || "";
  const encryptionKey =
    "c10a2499a46c1921688c6bf5f19b746f2eb4398b1d3c4d1c1f2e4a6c8b6a4f8c";

  useEffect(() => {
    // Get the decrypted email from the URL query parameters
    const searchParams = new URLSearchParams(window.location.search);
    const encryptedEmail = searchParams.get("email");

    if (encryptedEmail) {
      // Decrypt the email using crypto-js

      const decryptedBytes = CryptoJS.AES.decrypt(
        encryptedEmail,
        encryptionKey
      );
      const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);

      // Set the email state with the decrypted email
      setEmail(decryptedEmail);
    }
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/reset-password`,
        {
          email,
          newPassword,
        }
      );

      if (response.data.message === "success") {
        setMessage(response.data.message);
        toast.success("Password reset successful", {
          position: toast.POSITION.TOP_RIGHT,
        });

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
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Change Password</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you forgot your password, reset it here.
          </p>

          <form onSubmit={handleSubmit} noValidate>
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="New Password"
              type="password"
              id="newPass"
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
            >
              Submit
            </Button>
            <Grid container>
              <Grid item>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Click here to Login {""}
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

        <div className="md:block hidden w-1/2 ">
          <img className="rounded-2xl" src="Images/login.webp" alt="Login" />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
