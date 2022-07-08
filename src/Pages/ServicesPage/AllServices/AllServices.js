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
          textAlign: 'center', 
          marginTop: '150px', 
          fontWeight: 'bold',
        }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our Services
      </Typography>
      <Typography
        sx={{
          textAlign: 'center', 
        }}
        variant="body1"
        gutterBottom
        component="div"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/> Sapiente ipsum perferendis rem vel consequuntur accusamus aperiam ad obcaecati dolorem sequi.
      </Typography>

        <Container sx={{marginY: '50px'}}>
        <Grid container spacing={4}>
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
