import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState, useLayoutEffect} from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Order from "../Order/Order";
import OrderList from "../OrderList/OrderList";
import Dashbord from "../Dashbord/Dashbord"



const DeleteService = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  console.log(services)
  useLayoutEffect(() => {
     document.body.style.backgroundColor = "#E6FBFF"
});

  useEffect(() => {
    const url = `http://localhost:5000/services?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDeleteService = (id) => {
    const proceed = window.confirm('Are Sure To Delete This Service?');
    if(proceed){
      const url = `http://localhost:5000/services/${id}`
      fetch(url, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          alert('Service Deleted SuccessFully');
          const remaining = services.filter(order => order._id !== id);
          setServices(remaining);
        }
      });
    }
  }

  const appText = 'fuck';

  return (
    <Container sx={{pt: 4}}>
     
      {
        services.length === 0 ?
        <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginTop: 25}} gutterBottom variant="h4" component="div">
           Did not any order!!!
        </Typography>
        :
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid key={service._id} order={service} item xs={12} md={6} lg={4}>
      <Card sx={{mx: 'auto', mb: '25px', borderRadius: '20px'}}>
        <CardMedia
          component="img"
          height="170"
          image={service.img}
          alt="green iguana"
        />
        <CardContent>
          <Box sx={{ marginBottom: 1, marginTop: 1}}>
          <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="h6" component="div">
            {service.serviceName}
          </Typography>
          
          </Box>
          <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="body1" component="div">
            {/* Email: {email} <br /> */}
            Price: $ {service.price} <br />
            Delevery Time: {service.DeleveryTime} <br />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.discription}
          </Typography>
        </CardContent>
        <Box sx={{marginTop: '15px', borderRadius: 0}}>
          <Button  onClick={() => handleDeleteService(service._id)} sx={{textTransform: 'capitalize', fontSize: '17px', width: '100%', borderRadius: 0, backgroundColor: '#FF4F24', ":hover": { backgroundColor: "#FF4F24" } }}  variant="contained">Delete</Button>
        </Box>
      </Card>
    </Grid>
          ))}
        </Grid>
      }
      
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
};

export default DeleteService;