import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ServicesHeader = () => {
  return (
    <Box sx={{backgroundColor: '#FBD062', paddingBottom: '80px', paddingTop: '40px'}}>
      <Box sx={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Box>
          <Typography  sx={{fontWeight: 'bold'}} variant="h3" gutterBottom component="div">
            Best solutions for <br /> your business
          </Typography>
          <Typography  sx={{fontWeight: 'light'}} variant="body1" gutterBottom component="div">
          A quick view of industry specific problems solved <br /> with design by the awesome team at Keystroke.
          </Typography>
        </Box>
            <img style={{width: '47.4%', borderRadius: 16}} src="https://sustainometric.com/wp-content/uploads/2021/11/build-a-smart-digital-agency.jpg" alt="" />
      </Box>
    </Box>
  );
};

export default ServicesHeader;
