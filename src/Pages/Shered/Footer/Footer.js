import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#FBD062", marginTop: "100px" }}>
      <Grid
        sx={{ justifyContent: "space-evenly", pt: 8, marginBottom: 10 }}
        container
        spacing={4}
      >
        <Grid item lg={2.8} md={2.8} xs={10}>
          <Box>
            <Box sx={{ width: "250px" }}>
              <img
                style={{ width: "100%" }}
                src="https://i.ibb.co/Xy515kT/logo.png"
                alt=""
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "17px", marginTop: 5 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                A quick view of industry specific problems solved with design by
                the awesome team at Creative Agency.{" "}
              </Typography>
              <Typography
                sx={{ fontSize: "17px", marginTop: 3 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <span style={{ visibility: "hidden" }}>_</span>2750 Quadra
                Street Victoria, Canada
              </Typography>
              <Typography
                sx={{ fontSize: "17px", marginTop: 2 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                <span>
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span style={{ visibility: "hidden" }}>_</span>
                creativeAgency@gmail.com
              </Typography>
              <Typography
                sx={{ fontSize: "17px", marginTop: 2 }}
                variant="body1"
                gutterBottom
                component="div"
              >
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span style={{ visibility: "hidden" }}>_</span>1134-243
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2} md={2} xs={10}>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: 4 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Links
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              About Us
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Latest News & Blog
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Meet The Team
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Popular Services{" "}
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Testimonials
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Need a Career?
            </Link>
          </Typography>
        </Grid>

        <Grid item lg={2} md={2} xs={10}>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: 4 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Services
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Web Development
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              App Development
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              SEO Optimization
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Digital Marketing
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Grapic Design
            </Link>
          </Typography>
          <Typography
            sx={{ fontSize: "17px", marginTop: 2 }}
            variant="body1"
            gutterBottom
            component="div"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/services"
            >
              Online Security
            </Link>
          </Typography>
        </Grid>

        <Grid item lg={2.5} md={2.5} xs={10}>
          <Box>
            <Box>
              <Typography
                sx={{ fontWeight: "bold", marginBottom: 4 }}
                variant="h5"
                gutterBottom
                component="div"
              >
                Newsletter
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ marginTop: 3, fontSize: "17px" }}
                variant="body1"
                gutterBottom
                component="div"
              >
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general.
              </Typography>
              <TextField
                sx={{
                  marginTop: 3,
                  backgroundColor: "white",
                  borderRadius: 1,
                  border: "none",
                }}
                id="standard"
                placeholder="Enter your email"
                variant="outlined"
              />{" "}
              <br />
              <Button
                sx={{
                  backgroundColor: "black",
                  mt: 2,
                  px: 4,
                  textTransform: "capitalize",
                  ":hover": { backgroundColor: "black" },
                }}
                variant="contained"
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <p
        style={{
          borderTop: "1px solid black",
          backgroundColor: "#FBD062",
          width: "90.5%",
          margin: "auto",
        }}
      />
      <Grid
        sx={{
          justifyContent: "space-between",
          marginTop: 2,
          paddingBottom: 3,
          px: { lg: 9, sm: 2, xs: 2 },
        }}
        container
        spacing={2}
      >
        <Grid item lg={3.5} md={5} xs={10}>
          <Typography
            sx={{ fontSize: "17px" }}
            variant="body1"
            gutterBottom
            component="div"
          >
            All rights researved Creative Agency © 2022
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} xs={10}>
          <Box
            sx={{ display: { lg: "flex" }, justifyContent: "space-between" }}
          >
            <Typography
              sx={{ fontSize: "17px" }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Terms & Condition
            </Typography>
            <Typography
              sx={{ fontSize: "17px" }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{ fontSize: "17px" }}
              variant="body1"
              gutterBottom
              component="div"
            >
              Legal
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
