import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: "#FBD062", paddingBottom: '140px', paddingTop: '50px', paddingX: '30px', clipPath: {lg: 'polygon(0 0, 100% 0%, 100% 75%, 0 100%)', xs: 'polygon(0 0, 100% 0%, 100% 88%, 0 100%)'}}}>
        <Grid sx={{alignItems: 'center', justifyContent: 'space-evenly'}} container rowSpacing={1} >
          <Grid item xs={12} lg={3.5}>
          <Box sx={{marginBottom: {xs: 2, lg: 0}}}>
          <Typography sx={{fontWeight: 'bold', fontSize: {xs: '45px', lg: '55px'}}} variant="" component="div" gutterBottom>
            Let's Grow Your 
            Brand To The 
            Next Level 
          </Typography>
          <Typography sx={{mb: 3}} variant="body1" gutterBottom>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Quos blanditiis tenetur unde suscipit, quam beatae 
             rerum inventore consectetur, neque doloribus .
           </Typography>
           <Button sx={{backgroundColor: 'black', textTransform: 'capitalize', px: 6, py: 1, ':hover': {backgroundColor: 'black'}}} variant="contained">haire us</Button>
        </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
          <Box>
           <img
             style={{width: '100%'}}
             src="https://i.ibb.co/9b9D3xZ/Frame.png"
             alt=""
           />
        </Box>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Banner;
