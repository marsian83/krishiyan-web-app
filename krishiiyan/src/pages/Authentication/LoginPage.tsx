import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";

import GoogleOauthLogin from "../../Components/Auth/GoogleLogin";
let check1 = true;
const LoginPage = () => {
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
    check1 = true;
    validateEmail(email1);
  };
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let pass = data.get("password");

    const [err, res] = await Api.dealerLogin(email, pass);

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (res && check1) {
      console.log(res);
      localStorage.setItem("authToken", res?.data?.token);
      localStorage.setItem("dealerName", res?.data?.oldUser?.name);
      navigate("/");
      toast.success("Login Success !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
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
              onChange={handleEmailChange}
              inputProps={{
                pattern: "^(\\w+@(gmail\\.com|info|krishiyan\\.com|contact))?$",
                title:
                  "Please enter a valid email address with domains @gmail.com, @info, or @krishiyan.com",
              }}
            />
            <div className="relative">
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              ></svg>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Don't have an account? {""}
                  <Link
                    variant="subtitle2"
                    onClick={() => navigate("/signup")}
                    sx={{ cursor: "pointer" }}
                  >
                    {" Sign Up"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Forgot Password? {""}
                  <Link
                    variant="subtitle2"
                    onClick={() => navigate("/forgot-password")}
                    sx={{ cursor: "pointer" }}
                  >
                    {" Forgot Password"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Login with Google : {""}
                  <GoogleOauthLogin />
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

export default LoginPage;

//
