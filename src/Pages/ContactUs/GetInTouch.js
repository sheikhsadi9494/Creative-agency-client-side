import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const GetInTouch = () => {
  return (
    <Container>
        <Box sx={{display: {lg: "flex"}, alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10, marginBottom: 10}}>
              <Box>
              <Typography sx={{fontWeight: 'bold', color: '#08C137'}} variant="h6" gutterBottom component="div">
                    Get In Touch
                </Typography>
                <Typography sx={{fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
                         Have Any Project on Mind? Work Together
                </Typography>
               <Box sx={{mt: 7, mb: {xs: 7}, width: {lg: '120%', sm: "100%", xs: "100%"}}}>
               <img style={{width: '100%'}} src="https://i.ibb.co/PctzDQ4/img-5.png" alt="" />
               </Box>
              </Box>
              <Box>
              <Grid sx={{justifyContent: {lg: 'end', md: 'end', sm: 'center', xs: 'center'}}} container spacing={4}>
                

<Grid item lg={5} md={5} xs={11}>
  <Box sx={{border: '1px solid #D3D3D3', p: 4, borderRadius: '10px', ":hover": {backgroundColor: '#08C137', color: 'white'}}}>
      <Box>
        <Typography sx={{fontWeight: 'bold', marginBottom: 2}} variant="h4" gutterBottom component="div">
            <i style={{backgroundColor: '#08C137', color: "white", padding: "15px 20px 15px 20px",border: '1px solid white', borderRadius: '50%'}} class="fa-solid fa-location-dot"></i>
        </Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
           Locations
        </Typography>
        <Typography sx={{color: '#838383'}} variant="h6" gutterBottom component="div">
            505 Main Street, 2nd Block, New York
        </Typography>
      </Box>
  </Box>
</Grid>
<Grid item lg={5} md={5} xs={11}>
  <Box sx={{border: '1px solid #D3D3D3', p: 4, borderRadius: '10px', ":hover": {backgroundColor: '#08C137', color: 'white'}}}>
      <Box>
        <Typography sx={{fontWeight: 'bold', marginBottom: 2}} variant="h4" gutterBottom component="div">
            <i style={{backgroundColor: '#08C137', color: "white", padding: "15px 15px 15px 15px",border: '1px solid white', borderRadius: '50%'}} class="fa-solid fa-envelope-open-text"></i>
        </Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
        Email Address
        </Typography>
        <Typography sx={{color: '#838383'}} variant="h6" gutterBottom component="div">
        hotlinein@gmail.com www.info.net
        </Typography>
      </Box>
  </Box>
</Grid>
<Grid item lg={5} md={5} xs={11}>
  <Box sx={{border: '1px solid #D3D3D3', p: 4, borderRadius: '10px', ":hover": {backgroundColor: '#08C137', color: 'white'}}}>
      <Box>
        <Typography sx={{fontWeight: 'bold', marginBottom: 2}} variant="h4" gutterBottom component="div">
            <i style={{backgroundColor: '#08C137', color: "white", padding: "15px 15px 15px 15px",border: '1px solid white', borderRadius: '50%'}} class="fa-solid fa-phone"></i>
        </Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
           Phone Number
        </Typography>
        <Typography sx={{color: '#838383'}} variant="h6" gutterBottom component="div">
        +012 (345) 678 99 +0123456
        </Typography>
      </Box>
  </Box>
</Grid>
<Grid item lg={5} md={5} xs={11}>
  <Box sx={{border: '1px solid #D3D3D3', p: 4, borderRadius: '10px', ":hover": {backgroundColor: '#08C137', color: 'white'}}}>
      <Box>
        <Typography sx={{fontWeight: 'bold', marginBottom: 2}} variant="h4" gutterBottom component="div">
            <i style={{backgroundColor: '#08C137', color: "white", padding: "15px 15px 15px 15px",border: '1px solid white', borderRadius: '50%'}} class="fa-solid fa-clock"></i>
        </Typography>
      </Box>
      <Box>
        <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
        Working Hours
        </Typography>
        <Typography sx={{color: '#838383'}} variant="h6" gutterBottom component="div">
        Sunday - Monday09 am - 05 pm
        </Typography>
      </Box>
  </Box>
</Grid>

</Grid>
              </Box>
        </Box>

    </Container>
  );
};

export default GetInTouch;
