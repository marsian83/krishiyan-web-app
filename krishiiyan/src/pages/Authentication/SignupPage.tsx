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

const SignupPage = () => {
  const navigate = useNavigate();

  //Handlesubmit
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let name = data.get("name");
    let email = data.get("email");
    let pass = data.get("password");
    let mobile = data.get("phone");

    const [err, res] = await Api.dealerRegistration(name, email, pass, mobile);

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (res) {
      localStorage.setItem("authToken", res?.data?.token);
      localStorage.setItem("dealerName", res?.data?.result?.name);
      navigate("/");
      toast.success("Register Success !", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
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
              type="email"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
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
              type="phone"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone Number (e.g +919835717655)"
              id="phone"
              autoComplete="current-phone"
            />
            <Button
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
