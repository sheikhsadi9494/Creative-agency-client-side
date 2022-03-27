import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Order from "../Order/Order";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {orders.map((order) => (
          <Order key={order._id} order={order}></Order>
        ))}
      </Grid>
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
};

export default Orders;
