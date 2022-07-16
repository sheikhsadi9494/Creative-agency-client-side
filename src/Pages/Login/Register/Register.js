import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState([]);
  const { register, isLoading, user, authError, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    e.preventDefault();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.password2) {
      alert("password did not match");
      return;
    }
    register(
      registerData.email,
      registerData.password,
      registerData.name,
      navigate
    );
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle(navigate);
  };

  return (
    <Container>
      <Box sx={{ width: "200px", marginX: "auto", marginY: "50px" }}>
        <img
          style={{ width: "100%" }}
          src="https://i.ibb.co/Xy515kT/logo.png"
          alt=""
        />
      </Box>
      <Grid sx={{ justifyContent: "center" }} container spacing={2}>
        <Grid item lg={6} md={6} sm={11} xs={11}>
          <Box
            style={{
              border: "1px solid gray",
              padding: "40px",
              borderRadius: "15px",
            }}
          >
            {!isLoading && (
              <form onSubmit={handleRegisterSubmit}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Name"
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Retype Your Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <Box>
                  <Button
                    type="submit"
                    sx={{
                      width: "100%",
                      marginY: 3,
                      borderRadius: "30px",
                      backgroundColor: "black",
                      ":hover": { backgroundColor: "black" },
                      textTransform: "capitalize",
                      fontSize: "17px",
                    }}
                    variant="contained"
                  >
                    Register
                  </Button>
                </Box>
              </form>
            )}
            {isLoading &&   <Box sx={{width: '3.5%', mx: 'auto',mt: 5}}>
                 <CircularProgress/>
             </Box>}
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              {" "}
              Already have an account ? please{" "}
              <Link
                style={{ color: "#5DADE2", textDecoration: "none" }}
                to="/login"
              >
                login
              </Link>
            </p>
            <p
              style={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              ----------- or -----------
            </p>
            <Box style={{ width: "100%", margin: "auto", marginY: "10px" }}>
              <Button
                onClick={handleGoogleSignIn}
                // color="black"
                type="submit"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  borderRadius: "30px",
                  color: "black",
                  fontSize: "17px",
                }}
                variant="outlined"
              >
                <img
                  style={{ width: "30px" }}
                  src="https://i.ibb.co/bKqnDkL/google-1.png"
                  alt=""
                />
                <span style={{ visibility: "hidden" }}>__</span>Continue with
                Google
              </Button>
            </Box>

            {user.email && (
              <Alert sx={{ marginTop: "20px" }} severity="success">
                Register user successfully
              </Alert>
            )}
            {authError && (
              <Alert sx={{ marginTop: "20px" }} severity="error">
                {authError}
              </Alert>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
