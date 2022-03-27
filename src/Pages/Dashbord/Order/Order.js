import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Order = ({ order }) => {
  const { clientName, email, serviceName, img, _id, discription, price, DeleveryTime } = order;
  console.log(email)

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 345, mx: 'auto', mb: '25px'}}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {serviceName}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Email: {email} <br />
            price: $ {price} <br />
            Delevery Time: {DeleveryTime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" sx={{color: 'red'}}>cancel</Button>
        </CardActions>
      </Card>
    </Grid>

  );
};

export default Order;
