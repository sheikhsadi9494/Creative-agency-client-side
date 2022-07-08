import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ServicesHeader = () => {
  return (
    <Box style={{backgroundColor: '#FBD062', paddingBottom: '80px', paddingTop: '40px'}}>
      <Grid sx={{justifyContent: 'space-evenly', alignItems: 'center'}} container spacing={2}>
          <Grid item lg={4} md={4} xs={11}>
          <Box>
             <Typography  sx={{fontWeight: 'bold'}} variant="h3" gutterBottom component="div">
               Best solutions for <br /> your business
             </Typography>
             <Typography  sx={{fontWeight: 'light'}} variant="body1" gutterBottom component="div">
               A quick view of industry specific problems solved <br /> with design by the awesome team at Keystroke.
             </Typography>
             <Button sx={{backgroundColor: 'black', textTransform: 'capitalize', px: 4, py: 1, ':hover': {backgroundColor: 'black'}, marginTop: 3}} variant="contained">Learn More</Button>
          </Box>
          </Grid>
          <Grid item lg={5} md={5} xs={11} sx={{marginTop: 5}}>
            <Box>
               <img style={{width: '100%', borderRadius: 16}} src="https://sustainometric.com/wp-content/uploads/2021/11/build-a-smart-digital-agency.jpg" alt="" />
            </Box>
          </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesHeader;
