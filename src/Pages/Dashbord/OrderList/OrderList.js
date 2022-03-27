import React from "react";
import { Outlet } from "react-router-dom";

const OrderList = () => {
  return (
    <div>
      <h2>Order List</h2>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default OrderList;
