import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PortfolioService = () => {
  return (
    <Container>
        {/* <Typography sx={{fontWeight: 'bold', textAlign: 'center'}} variant="h4" gutterBottom component="div">
          Our Portfolio Website
        </Typography> */}
      <Grid sx={{marginTop: 10, marginBottom: 15}} container spacing={4}>
        <Grid item lg={4} md={4} xs={10}>
          <Box sx={{}}>
            <Box sx={{width: "100%"}}>
                <img style={{width: '100%', borderRadius: '15px'}} src="https://i.ibb.co/T1scjBh/carousel-1.png" alt="" />
            </Box>
            <Box>
            <Typography sx={{fontWeight: 'bold', pt: 2}} variant="h5" gutterBottom component="div">
                 Book Hub
            </Typography>
            <Typography sx={{fontWeight: 'semibold', textAlign: '', marginTop: "-10px"}} variant="body1" gutterBottom component="div">
                Most popular online book reading site 
            </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} xs={10}>
          <Box sx={{}}>
            <Box sx={{width: "100%"}}>
                <img style={{width: '100%', borderRadius: '15px'}} src="https://i.ibb.co/ctt5LvT/carousel-2.png" alt="" />
            </Box>
            <Box>
            <Typography sx={{fontWeight: 'bold', pt: 2}} variant="h5" gutterBottom component="div">
                 Travel
            </Typography>
            <Typography sx={{fontWeight: 'semibold', textAlign: '', marginTop: "-10px"}} variant="body1" gutterBottom component="div">
                Most popular hotel booking web site
            </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} xs={10}>
          <Box sx={{}}>
            <Box sx={{width: "100%"}}>
                <img style={{width: '100%', borderRadius: '15px'}} src="https://cdn.dribbble.com/users/1483413/screenshots/10733343/digital_marketing_dribbble_mockup_4x.png" alt="" />
            </Box>
            <Box>
            <Typography sx={{fontWeight: 'bold', pt: 2}} variant="h5" gutterBottom component="div">
                 DM
            </Typography>
            <Typography sx={{fontWeight: 'semibold', textAlign: '', marginTop: "-10px"}} variant="body1" gutterBottom component="div">
                Most popular Degital Markating site
            </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PortfolioService;
