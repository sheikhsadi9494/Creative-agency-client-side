import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Review = ({ review }) => {
  const { displayName, email, img, comment } = review;

  return (
    <Grid item xs={8} md={6} lg={4}>
      <Card sx={{ maxWidth: 345, marginY: '50px'}}>
        <Box style={{ marginY: "40px", textAlign: 'center'}}>
          <img
            style={{ width: "30%", borderRadius: 16, marginTop: "20px" }}
            src={img}
            alt=""
          />
        </Box>
          <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginY: '10px'}} variant="h5" gutterBottom>
            {displayName}
          </Typography>
        <Box>
          <Typography sx={{ textAlign: "center" }} variant="body1" gutterBottom>
            {comment}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default Review;
