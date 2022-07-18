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
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const { user, login, authError, isLoading, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginData.email, loginData.password, location, navigate);
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle(location, navigate);
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
      <Grid sx={{justifyContent: 'center'}} container spacing={2}>
        <Grid item lg={6} md={6} sm={11} xs={11}>
        <Box
        style={{
          border: "1px solid gray",
          // width: {lg: "45%", md: "45%", sm: "70%", xs: "70%"},
          // margin: "auto",
          padding: "40px",
          borderRadius: "15px",
        }}
      >
        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "100%" }}
              label="Email"
              type="email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />{" "}
            <br />
            <TextField
              sx={{ width: "100%" }}
              label="Password"
              type="password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />
            <Box>
              <Button
                type="submit"
                sx={{ width: "100%", marginY: 3, borderRadius: '30px',backgroundColor: 'black', ":hover": {backgroundColor: 'black'}, textTransform: "capitalize", fontSize: '17px'}}
                variant="contained"
              >
                Login
              </Button>
            </Box>
          </form>
        )}
        {isLoading &&   <Box sx={{width: '3.5%', mx: 'auto',mt: 5}}>
                 <CircularProgress/>
             </Box>}
        <p style={{ textAlign: "center", fontWeight: 'bold'}}>
          Don't have an account ? <span><Link style={{color: "#5DADE2", textDecoration: 'none'}} to="/register">create one</Link></span>
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
            sx={{ width: "100%", textTransform: "capitalize", borderRadius: '30px', color: 'black', fontSize: '17px'}}
            variant="outlined"
          >
           <img style={{width: '30px'}} src="https://i.ibb.co/bKqnDkL/google-1.png" alt="" /><span style={{visibility: "hidden"}}>__</span>Continue with Google
          </Button>
        </Box>
        {user.email && (
          <Alert severity="success">
             Login Successfully
          </Alert>
        )}
        {authError && <Alert sx={{mt: 3}} severity="error">{authError}</Alert>}
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
