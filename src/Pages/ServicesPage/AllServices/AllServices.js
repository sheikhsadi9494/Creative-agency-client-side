import { Container, Grid, Typography } from "@mui/material";
import { Box, fontWeight } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const AllServices = ({orderSuccessfull}) => {
  const [AllServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <Box>
      <Typography
        sx={{
          width: "8%",
          textAlign: "center",
          marginTop: "100px",
          marginX: "60px",
          boxShadow: 3,
          padding: "5px",
          borderRadius: 1,
          backgroundColor: "#FFC300 ",
          fontWeight: "bold",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Services
      </Typography>
      <Typography
        sx={{
          marginX: "60px",
        }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Our Services
      </Typography>

        <Container sx={{marginY: '50px'}}>
        <Grid container spacing={2}>
            {
                AllServices.map(singleService => <SingleService 
                    key={singleService.serviceName} 
                    singleService={singleService}
                    orderSuccessfull={orderSuccessfull}
                    >
                    </SingleService>)
            }
        </Grid>
        </Container>

    </Box>
  );
};

export default AllServices;
