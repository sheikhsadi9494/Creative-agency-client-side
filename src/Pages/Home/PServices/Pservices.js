import { Button, CircularProgress, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box, fontWeight } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleService from "../../ServicesPage/SingleService/SingleService";

const PServices = ({ orderSuccessfull }) => {
  const [AllServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("https://serene-springs-79030.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  const [tempServices, setTempServices] = useState(AllServices);

  const filterServices = (serviceCate) => {
    const cateServices = AllServices.filter((currentService) => {
      return currentService.category === serviceCate;
    });
    if (serviceCate === "All") {
      setTempServices(AllServices.slice(0, 9));
    } else {
      setTempServices(cateServices);
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our <span style={{color: '#08C137'}}>Services</span>
      </Typography>
      <Container>
        <Grid sx={{ justifyContent: "center", mt: 3 }} container spacing={2}>
          <Grid item lg={3} md={3} sm={5} xs={5} sx={{ margin: "auto" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                textTransform: "capitalize",
                margin: "auto",
                backgroundColor: 'black',
                ":hover": {backgroundColor: 'black'}
              }}
              onClick={() => filterServices("All")}
            >
              All
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={5} xs={5} sx={{ margin: "auto" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                textTransform: "capitalize",
                margin: "auto",
                backgroundColor: 'black',
                ":hover": {backgroundColor: 'black'}
              }}
              onClick={() => filterServices("development")}
            >
              Development
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={5} xs={5} sx={{ margin: "auto" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                textTransform: "capitalize",
                margin: "auto",
                backgroundColor: 'black',
                ":hover": {backgroundColor: 'black'}
              }}
              onClick={() => filterServices("design")}
            >
              Design
            </Button>
          </Grid>
          <Grid item lg={3} md={3} sm={5} xs={5} sx={{ margin: "auto" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                textTransform: "capitalize",
                margin: "auto",
                backgroundColor: 'black',
                ":hover": {backgroundColor: 'black'}
              }}
              onClick={() => filterServices("markating")}
            >
              Marketing
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ marginTop: 10, marginBottom: 10}}>
        <Grid container spacing={4}>
        {
                 AllServices.length <= 0   &&
                 <Box sx={{width: '3.5%', mx: 'auto',mt: 5}}>
                 <CircularProgress/>
             </Box>

            }
  
          {tempServices.length === 0
            ? AllServices.slice(0,9).map((singleService) => (
                <SingleService
                  key={singleService.serviceName}
                  singleService={singleService}
                  orderSuccessfull={orderSuccessfull}
                ></SingleService>
              ))
            : tempServices.map((singleService) => (
                <SingleService
                  key={singleService.serviceName}
                  singleService={singleService}
                  orderSuccessfull={orderSuccessfull}
                ></SingleService>
              ))}
        </Grid>
        <Box sx={{width: '200px', mx: 'auto', marginTop: 10}}>
        <Link style={{textDecoration: 'none'}} to="/services">
        <Button
              variant="contained"
              sx={{
                width: "100%",
                textTransform: "capitalize",
                margin: "auto",
                backgroundColor: 'black',
                ":hover": {backgroundColor: 'black'}
              }}
            >
              More Services
            </Button>
        </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default PServices;