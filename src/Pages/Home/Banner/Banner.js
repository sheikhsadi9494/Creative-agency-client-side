import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box sx={{backgroundColor: "#F6CB3A", paddingBottom: '80px', paddingTop: '40px', paddingX: '30px'}}>
      <Box sx={{ display: "flex", justifyContent: 'space-evenly', alignItems: "center", flexWrap: 'wrap'}}>
        <Box>
          <Typography sx={{fontWeight: 'bold'}} variant="h2" component="div" gutterBottom>
            Let's Grow Grow <br />
            Brand To The <br />
            Next Level <br />
          </Typography>
          <Typography variant="body1" gutterBottom>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
             Quos blanditiis tenetur unde suscipit, quam beatae  <br />
             rerum inventore consectetur, neque doloribus .
           </Typography>
           <Button sx={{backgroundColor: 'black'}} variant="contained">haire us</Button>
        </Box>
        <img
          style={{ width: "45%", display: 'block'}}
          src="https://i.ibb.co/9b9D3xZ/Frame.png"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default Banner;
