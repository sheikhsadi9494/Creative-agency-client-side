import React from "react";
import { Outlet } from "react-router-dom";

const AddService = () => {
  return (
    <div>
      <h2>Add Service</h2>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AddService;
