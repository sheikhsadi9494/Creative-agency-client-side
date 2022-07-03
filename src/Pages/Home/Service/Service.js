import { Scale } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Service = ({ service }) => {
  const { serviceName, img, discription } = service;
  return (
    <Grid sx={{ ":hover": {boxShadow: 10, borderRadius: 5, transform: 'scale(1.05)'}, cursor: 'pointer', justifyContent: 'space-evenly', marginX: 'auto', mb: 5, transition: 'transform 0.5s'}}
 xs={10} md={3.5}>
      <Box>
        <CardMedia
          component="img"
          sx={{width: '40%', margin: 'auto', pt: 3}}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
            {serviceName}
          </Typography>
          <Typography sx={{textAlign: 'center'}} variant="body2" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>
      </Box>
    </Grid>
  );
};

export default Service;
