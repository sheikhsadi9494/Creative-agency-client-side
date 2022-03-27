import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleOnBlur = e => {
    setEmail(e.target.value);
  }
  const handleAdminSubmit = e => {
    e.preventDefault();
    const user = {email};
    fetch('http://localhost:5000/user/admin', {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        setSuccess(true);
        console.log(data);
      }
    })
    
  }

  return (
    <div>
      <h2>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField 
        label="Email" 
        variant="standard" 
        type='email'
        onBlur={handleOnBlur}
        />
        <Button type="submit" variant="contained">Make Admin</Button>
      </form>
      {
          success && 
          <Alert sx={{marginTop: '20px'}} severity="success">Promoted to Admin Successfully !</Alert>
        }
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MakeAdmin;
