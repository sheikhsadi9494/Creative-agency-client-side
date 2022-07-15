import { Box, Typography } from "@mui/material";
import React from "react";

const ContactUsBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FBD062",
        paddingBottom: "150px",
        paddingTop: 12,
        paddingX: "30px",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Contact Us
      </Typography>
    </Box>
  );
};

export default ContactUsBanner;
