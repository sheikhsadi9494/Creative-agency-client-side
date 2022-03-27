import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  useEffect(() => {
    fetch(`http://localhost:5000/allOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const 

  return (
    <div>
      <h2>Order List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Client Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Service</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <StyledTableRow key={order._id}>
                <StyledTableCell component="th" scope="row">
                  {order.clientName}
                </StyledTableCell>
                <StyledTableCell align="right">{order.email}</StyledTableCell>
                <StyledTableCell align="right">{order.serviceName}</StyledTableCell>
                <StyledTableCell align="right">{order.protein}</StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => handleDeleteOrder(order._id)}>Delete</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default OrderList;
