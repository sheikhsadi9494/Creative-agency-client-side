import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SendUsMessage = () => {
  return (
    <Box sx={{backgroundColor: '#FBD062', py: 15, mt: 25}}>
      <Grid sx={{justifyContent: 'center'}} container spacing={2}>
        <Grid item xs={11} md={5}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h4"
              gutterBottom
              component="div"
            >
              Let us handle your project, professionally.
            </Typography>
            <Typography variant="body1" gutterBottom>
              With well written codes, we build amazing apps for all platforms,{" "}
              <br /> mobile and web apps in general.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={11} md={5}>
          <Box>
            <TextField
              placeholder="Your email address"
              id="outlined-size-small"
              size="small"
              sx={{ width: "100%", backgroundColor: 'white', borderRadius: 1}}
            />
            <TextField
              placeholder="Your name / company name"
              id="outlined-size-small"
              size="small"
              sx={{ width: "100%", mt: 2, backgroundColor: 'white', borderRadius: 1}}
            />
            <TextField
              id="outlined-multiline-static"
              placeholder="Your message"
              multiline
              rows={4}
              sx={{ width: "100%", mt: 2 , backgroundColor: 'white', borderRadius: 1}}
            />
            <Button sx={{backgroundColor: 'black', mt: 2, px: 4, textTransform: 'capitalize'}} variant="contained">Send</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SendUsMessage;
