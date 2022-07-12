import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NewsLetter = () => {
  return (
    <Container style={{marginTop: "150px", marginBottom: '100px'}}>
      <Grid container spacing={2} sx={{justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Grid item lg={6} md={5} xs={10}>
          <Box sx={{width: '100%'}}>
            <img style={{width: "100%"}} src="https://i.ibb.co/DVXQtSv/subscribe.png" alt="" />
          </Box>
        </Grid>
        <Grid item lg={5} md={5} xs={10}>
          <Box>
            <Typography sx={{fontWeight: 'bold', textAlign: '', marginBottom: "50px"}} variant="h4" gutterBottom component="div">       
              Subscribe <br/>
              Our <span style={{color: '#08C137'}} >News latter!!</span>
            </Typography>
            <form action="">
               <TextField sx={{width: '100%', marginTop: 4}} id="standard-basic" placeholder="Enter your name" variant="standard" /> <br />
               <TextField sx={{width: '100%', marginTop: 4}} id="standard-basic" placeholder="Enter your email" variant="standard" /> <br />
               <TextField
                id="standard-multiline-static"
                placeholder="Enter your message"
                sx={{width: '100%', marginTop: 4}}
                multiline
                rows={6}
                variant="standard" 
                />
                    <Button sx={{backgroundColor: 'black', textTransform: 'capitalize', px: 5, py: 1, marginTop: 5, ':hover': {backgroundColor: 'black'}, borderRadius: '30px', fontWeight: 'semibold', fontSize: "large"}} variant="contained">Subscribe</Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsLetter;
