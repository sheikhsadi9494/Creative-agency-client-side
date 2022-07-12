import { Button, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box, fontWeight } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const AllServices = ({ orderSuccessfull }) => {
  const [AllServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  const [tempServices, setTempServices] = useState(AllServices);

  const filterServices = (serviceCate) => {
    const cateServices = AllServices.filter((currentService) => {
      return currentService.category === serviceCate;
    });
    if (serviceCate === "All") {
      setTempServices(AllServices);
    } else {
      setTempServices(cateServices);
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "150px",
          fontWeight: "bold",
        }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our Services
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
        }}
        variant="body1"
        gutterBottom
        component="div"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
        Sapiente ipsum perferendis rem vel consequuntur accusamus aperiam ad
        obcaecati dolorem sequi.
      </Typography>
      <Container>
      <Grid sx={{justifyContent: 'center', mt: 3}} container spacing={2}>
        <Grid item lg={3} md={3} sm={5} xs={5} sx={{margin: 'auto'}}>
            <Button
              variant="contained"
              sx={{ width: "100%", textTransform: 'capitalize', margin: 'auto'}}
              onClick={() => filterServices("All")}
            >
              All
            </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={5} xs={5} sx={{margin: 'auto'}}>
            <Button
              variant="contained"
              sx={{ width: "100%", textTransform: 'capitalize', margin: 'auto'}}
              onClick={() => filterServices("development")}
            >
              Development
            </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={5} xs={5} sx={{margin: 'auto'}}>
            <Button
              variant="contained"
              sx={{ width: "100%", textTransform: 'capitalize', margin: 'auto'}}
              onClick={() => filterServices("design")}
            >
              Design
            </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={5} xs={5} sx={{margin: 'auto'}}>
            <Button
              variant="contained"
              sx={{ width: "100%", textTransform: 'capitalize', margin: 'auto'}}
              onClick={() => filterServices("markating")}
            >
              Marketing
            </Button>
        </Grid>
      </Grid>
      </Container>
      <Container sx={{ marginTop: 10 }}>
        <Grid container spacing={4}>
          {tempServices.length === 0
            ? AllServices.map((singleService) => (
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
      </Container>
    </Box>
  );
};

export default AllServices;
