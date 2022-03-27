import { Alert, Button, TextField } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Reviews = () => {
  const {user} = useAuth();

  const initialInfo = {displayName: user.displayName, email: user.email};
  const [reviewData, setReviewData] = useState(initialInfo);
  const [reviewSuccessfull, setReviewSuccessful] = useState(false);

  const handleBlur = e => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = {...reviewData};
    newDetails[field] = value;
    setReviewData(newDetails);
  }

  const handleReviewSubmit = e => {
    e.preventDefault();
    //collect data
    const review = {
      ...reviewData
    }
    console.log(review);
    //send data
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        setReviewSuccessful(true);
      }
    })
  }

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Reviews</h2>
      <form onSubmit={handleReviewSubmit} style={{ border: '1px solid lightGray', width: '60%', margin: 'auto', padding: '40px', borderRadius: '15px' }}>
        <TextField
          label="Image URL"
          sx={{ width: "100%", marginY: 1}}
          name="img"
          onBlur={handleBlur}
          variant="outlined"
        /> <br />
        <TextField
          id="outlined-multiline-static"
          label="Write Your Review"
          multiline
          rows={4}
          sx={{ width: "100%", marginY: 1}}
          name="comment"
          onBlur={handleBlur}
        /> <br />
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      
       {
          reviewSuccessfull && 
          <Alert sx={{marginTop: '20px'}} severity="success">review successfully !</Alert>
        }
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Reviews;
