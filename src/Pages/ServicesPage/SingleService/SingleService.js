import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ singleService }) => {
  const { serviceName, img, discription, _id } = singleService;

  return (
      <Grid sx={{marginY: '10px'}} item xs={12} md={4}>
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{width: '100%', margin: 'auto'}}
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
          <Box sx={{textAlign: 'center', marginTop: '20px'}}>
            <Link style={{textDecoration: 'none'}} to={`/services/${_id}`}>
               <Button variant="contained">Get this service</Button>
            </Link>
          </Box>
        </CardContent>
       </Card>
     </Grid>
  );
};

export default SingleService;
