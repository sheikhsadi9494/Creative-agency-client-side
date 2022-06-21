import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  return (
    <Box>
      <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
         Provide awesome <span style={{color: '#08C137'}}>services</span>
      </Typography>
    
    <Container sx={{marginY: '80px'}}>
        <Grid container>
            {
              services.map(service => <Service key={service.serviceName} service={service}></Service>)
            }
        </Grid>
    </Container>
 
    </Box>
  );
};

export default Services;
