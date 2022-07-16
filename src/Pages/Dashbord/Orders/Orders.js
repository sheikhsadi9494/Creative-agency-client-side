import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Order from "../Order/Order";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#E6FBFF";
  });

  useEffect(() => {
    const url = `https://serene-springs-79030.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);


  return (
    <Container sx={{ pt: 4 }}>
      {orders.length === 0 ? (
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", marginTop: 25 }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Did not any order!!!
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {orders.map((order) => (
            <Order
              key={order._id}
              order={order}
              orders={orders}
              setOrders={setOrders}
            ></Order>
          ))}
        </Grid>
      )}

      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
};

export default Orders;
