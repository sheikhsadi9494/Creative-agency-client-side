import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AnimatedText from "react-animated-text-content";
import './Banner.css'

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: "#FBD062", paddingBottom: '160px', paddingTop: {lg: '42px', md: '42px', sm: '10px', xs: '10px'}, paddingX: '30px', clipPath: {lg: 'polygon(0 0, 100% 0%, 100% 75%, 0 100%)', xs: 'polygon(0 0, 100% 0%, 100% 88%, 0 100%)'}}}>
        <Grid sx={{alignItems: 'center', justifyContent: 'space-evenly'}} container rowSpacing={1} >
          <Grid item xs={12} lg={3.5}>
          <Box sx={{marginBottom: {xs: 2, lg: 0}}}>
          {/* <Typography sx={{fontWeight: 'bold', fontSize: {xs: '45px', lg: '55px'}}} variant="" component="div" gutterBottom>
            Let's Grow Your 
            Brand To The 
            Next Level 
          </Typography> */}
          <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="h1"
  className="animated-paragraph heading-text"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
            Let's Grow Your 
            Brand To The 
            Next Level 
</AnimatedText>
          <Typography sx={{mb: 3}} variant="body1" gutterBottom>
             Let us handle your project, professionally. <br />
             With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
           </Typography>
           <Button sx={{backgroundColor: 'black', textTransform: 'capitalize', px: 6, py: 1, ':hover': {backgroundColor: 'black'}}} variant="contained">haire us</Button>
        </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
          <Box sx={{marginTop: {lg: 0, md: 0, sm: 3, xs: 3}}}>
           <img
           className="vert-move"
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
