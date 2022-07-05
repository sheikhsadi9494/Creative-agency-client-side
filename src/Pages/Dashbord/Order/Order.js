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
      <Card sx={{mx: 'auto', mb: '25px', borderRadius: '20px'}}>
        <CardMedia
          component="img"
          height="170"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: 1, marginTop: 1}}>
          <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="h6" component="div">
            {serviceName}
          </Typography>
          {
            status === 'Pending' ?
            <Typography sx={{backgroundColor: "#FF827C", color: 'white', borderRadius: 2, px: 2, paddingTop: '5px'}} gutterBottom variant="body1" component="div">
             {status}
            </Typography>
          :
            <Typography sx={{backgroundColor: "#57D568", color: 'white', borderRadius: 2, px: 2, paddingTop: '5px'}} gutterBottom variant="body1" component="div">
             {status}
            </Typography>
          }
          
          </Box>
          <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="body1" component="div">
            {/* Email: {email} <br /> */}
            Price: $ {price} <br />
            Delevery Time: {DeleveryTime} <br />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>
        <CardActions sx={{marginTop: '-15px', marginLeft: '5px'}}>
          <Button sx={{textTransform: 'capitalize', color: 'red', fontSize: '17px'}} onClick={() => handleDeleteOrder(_id)} variant="text">cancel</Button>
        </CardActions>
      </Card>
    </Grid>

  );
};

export default Order;
