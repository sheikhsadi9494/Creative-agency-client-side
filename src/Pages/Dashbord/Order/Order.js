import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Order = ({ order, orders, setOrders}) => {
  const { clientName, email, serviceName, img, _id, discription, price, DeleveryTime, status} = order;

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm('Are Sure To Cancle This Order?');
    if(proceed){
      const url = `http://localhost:5000/orders/${id}`
      fetch(url, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          alert('Order Deleted SuccessFully');
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining);
        }
      });
    }
  }

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
            Delevery Time: {DeleveryTime} <br />
            Status: {status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleDeleteOrder(_id)} variant="text" sx={{color: 'red'}}>cancel</Button>
        </CardActions>
      </Card>
    </Grid>

  );
};

export default Order;
