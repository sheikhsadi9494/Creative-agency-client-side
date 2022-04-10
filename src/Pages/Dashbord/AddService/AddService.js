import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

const AddService = () => {
  return (
    <div>
      <h2>Add Service</h2>
      <Box>
        <form style={{padding: '30px', width: '80%', margin: "auto", borderRadius: "20px", border: '1px solid gray'}}>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            sx={{width: '70%'}}
          /> <br />
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            sx={{my: 3, width: '70%'}}
          /> <br />
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            sx={{width: '70%'}}
          /> <br />
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            sx={{my: 3, width: '70%'}}
          /> <br />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            sx={{width: '100%'}}
          />
          <Button variant="contained" sx={{mt: 3}} type="submit">Submit</Button>
        </form>
      </Box>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AddService;
