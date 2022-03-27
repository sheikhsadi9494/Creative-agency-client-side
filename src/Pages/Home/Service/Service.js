import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Service = ({ service }) => {
  const { serviceName, img, discription } = service;
  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{width: '50%', margin: 'auto'}}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
            {serviceName}
          </Typography>
          <Typography sx={{textAlign: 'center'}} variant="body2" color="text.secondary">
            {discription}
          </Typography>
          {/* <Box sx={{textAlign: 'center', marginTop: '20px'}}>
            <Button sx={{backgroundColor: '#FF5733 '}} variant="contained">Get this service</Button>
          </Box> */}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
