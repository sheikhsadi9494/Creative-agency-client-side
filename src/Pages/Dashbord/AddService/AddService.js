import { Button, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import './AddService.css'

const AddService = () => {
  const [service, setService] = useState([]);

  const handleBlur = e => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const NewService = {...service};
    NewService[field] = value;
    setService(NewService);
  }

  const handleServicesDataSubmit = e => {
    e.preventDefault();
    //collect data
    const services = {
      ...service
    }
    console.log(services);
    //send data
    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(services)
    })
    .then(res => res.json())
    .then(data => {
      // if(data.insertedId){
      //   setReviewSuccessful(true);
      // }
      console.log(data)
    })
  }
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Add Service</h2>
      <Box>
        <Paper className="addServiceFrom" sx={{p: 5, borderRadius: '15px'}} elevation={12}>
        <form onSubmit={handleServicesDataSubmit}>
          <TextField
            label="Service Name"
            name="serviceName"
            onBlur={handleBlur}
            size="small"
            sx={{mb: 2, width: '100%'}}
          /> <br />                          
          <TextField
            label="Price"
            name="price"
            onBlur={handleBlur}
            size="small"
            sx={{mb: 2, width: '100%'}}
          /> <br /> 
          <TextField
            label="Image Url"
            name="img"
            onBlur={handleBlur}
            size="small"
            sx={{mb: 2, width: '100%'}}
          /> <br /> 
          <TextField
            label="Delevery Time"
            name="DeleveryTime"
            onBlur={handleBlur}
            size="small"
            type="number"
            sx={{mb: 2, width: '100%'}}
          /> <br />
          <TextField
            id="outlined-multiline-static"
            name="discription"
            onBlur={handleBlur}
            label="About Service"
            multiline
            rows={4}
            sx={{width: '100%'}}
          />
                    <Button
            sx={{
              backgroundColor: "black",
              mt: 2,
              px: 4,
              textTransform: "capitalize",
              ":hover": { backgroundColor: "black" },
              width: "100%",
            }}
            type="submit"
            variant="contained"
          >
            Add Service
          </Button>
        </form>
        </Paper>
      </Box>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AddService;
