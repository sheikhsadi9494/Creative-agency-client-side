import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://serene-springs-79030.herokuapp.com/user/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
        }
      });
  };

  return (
    <div>
      <Grid
        sx={{ justifyContent: "space-evenly", alignItems: "center" }}
        container
        spacing={2}
      >
        <Grid item lg={6} md={6} xs={8}>
          <Box>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/zQMrmJX/4346259-removebg.png"
              alt=""
            />
          </Box>
        </Grid>
        <Grid item lg={5} md={5} xs={8}>
          <Box>
            <form onSubmit={handleAdminSubmit}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Box>
                  <TextField
                    label="New Admin's Email"
                    variant="standard"
                    type="email"
                    style={{ width: "100%" }}
                    onBlur={handleOnBlur}
                  />
                </Box>
                <Box>
                  <Button
                    sx={{
                      backgroundColor: "#FFD21C",
                      color: "black",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      ":hover": { backgroundColor: "#FFD21C" },
                      width: "150px",
                    }}
                    type="submit"
                    variant="contained"
                  >
                    Make Admin
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
      {success && (
        <Alert sx={{ marginTop: "20px" }} severity="success">
          Promoted to Admin Successfully !
        </Alert>
      )}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MakeAdmin;
