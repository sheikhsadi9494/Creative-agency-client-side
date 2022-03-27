import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
  return (
    <Box>
      <Typography sx={{fontWeight: 'bold', textAlign: 'center'}} variant="h4" gutterBottom component="div">
        Our <span style={{color: '#08C137'}} >Clients</span> Says
      </Typography>
      <Container>
       <Grid container spacing={2}>
          {
            reviews.map(review => <Review
             key={review._id}
             review={review}
            ></Review>)
          }
       </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
