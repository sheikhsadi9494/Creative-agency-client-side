import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Logos = () => {
  return (
    <Container sx={{mt: {xs: 4, lg: 11}, mb: {xs: 5, lg: 15}}}>
      <Grid style={{justifyContent: 'space-evenly', alignItems: 'center'}} container spacing={2}>
        <Grid item xs={5} md={1.5} lg={1.5}>
          <Box style={{ margin: 'auto'}}>
             <img style={{width: '100%'}} src="https://i.ibb.co/2yCrRRV/slack.png" alt="" />
          </Box>
        </Grid>
        <Grid item xs={5} md={1.5} lg={1.5}>
          <Box style={{ margin: 'auto'}}>
             <img style={{width: '100%'}} src="https://i.ibb.co/3sSQXDT/google.png" alt="" />
          </Box>
        </Grid>
        <Grid item xs={3.5} md={1.1} lg={1.1}>
          <Box style={{ margin: 'auto'}}>
             <img style={{width: '100%'}} src="https://i.ibb.co/pzjkjTK/uber.png" alt="" />
          </Box>
        </Grid>
        <Grid item xs={4} md={1.3} lg={1.3}>
          <Box style={{ margin: 'auto'}}>
             <img style={{width: '100%'}} src="https://i.ibb.co/frvHJ8Y/netflix.png" alt="" />
          </Box>
        </Grid>
        <Grid item xs={5} md={1.5} lg={1.5}>
          <Box style={{ margin: 'auto'}}>
             <img style={{width: '100%'}} src="https://i.ibb.co/DM6V8wM/airbnb.png" alt="" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Logos;

{
  /* <Box sx={{ display: 'flex', alignItems: 'center', marginX: '50px', marginY: '80px'}}>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/2yCrRRV/slack.png" alt="" />
            </Box>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/3sSQXDT/google.png" alt="" />
            </Box>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/pzjkjTK/uber.png" alt="" />
            </Box>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/frvHJ8Y/netflix.png" alt="" />
            </Box>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/DM6V8wM/airbnb.png" alt="" />
            </Box>
        </Box> */
}
