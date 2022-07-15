import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://serene-springs-79030.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Box>
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center", pb: 7 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our <span style={{ color: "#08C137" }}>Clients</span> Says
      </Typography>
      <Container>
        <Grid sx={{ mb: 12 }} container spacing={4}>
        {
                 reviews.length <= 0   &&
                 <Box sx={{width: '3.5%', mx: 'auto',mt: 5}}>
                 <CircularProgress/>
             </Box>

            }
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
