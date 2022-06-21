import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

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
        <form onSubmit={handleServicesDataSubmit} style={{padding: '30px', width: '80%', margin: "auto", borderRadius: "20px", border: '1px solid gray'}}>
          <TextField
            label="Service Name"
            name="serviceName"
            onBlur={handleBlur}
            size="small"
            sx={{mb: 2, width: '70%'}}
          /> <br />                          
          <TextField
            label="Price"
            name="price"
            onBlur={handleBlur}
            size="small"
            sx={{mb: 2, width: '70%'}}
          /> <br /> 
          <TextField
            label="Image Url"
            name="img"
            onBlur={handleBlur}
            size="small"
            sx={{mb: 2, width: '70%'}}
          /> <br /> 
          <TextField
            label="Delevery Time"
            name="DeleveryTime"
            onBlur={handleBlur}
            size="small"
            type="number"
            sx={{mb: 2, width: '70%'}}
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
          <Button onC variant="contained" sx={{mt: 3}} type="submit">Submit</Button>
        </form>
      </Box>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AddService;
