import {
  Alert,
  Button,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";
import "./Reviews.css";

const Reviews = () => {
  const { user } = useAuth();

  const initialInfo = { displayName: user.displayName, email: user.email };
  const [reviewData, setReviewData] = useState(initialInfo);
  const [reviewSuccessfull, setReviewSuccessful] = useState(false);

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#E6FBFF";
  });

  const handleBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...reviewData };
    newDetails[field] = value;
    setReviewData(newDetails);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    //collect data
    const review = {
      ...reviewData,
    };
    console.log(review);
    //send data
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setReviewSuccessful(true);
        }
      });
  };

  return (
    <div>
      <Typography
        sx={{
          color: "black",
          fontWeight: "semiBold",
          textTransform: "capitalize",
          textAlign: 'center',
          marginTop: '30px',
          marginBottom: '50px',
        }}
        variant="h4"
        noWrap
        component="div"
      >
        Make Review
      </Typography>

      <form
        className="reviewFrom"
        sx={
          {
            // border: "none",
            // padding: "40px",
            // borderRadius: "15px",
            // backgroundColor: "#F7DC6F",
          }
        }
        onSubmit={handleReviewSubmit}
      >
        <TextField
          placeholder="Image URL"
          sx={{
            width: "100%",
            marginY: 1,
            backgroundColor: "white",
            borderRadius: 1,
          }}
          name="img"
          onBlur={handleBlur}
          variant="outlined"
        />{" "}
        <br />
        <TextField
          placeholder="Position in your company"
          sx={{
            width: "100%",
            marginY: 1,
            backgroundColor: "white",
            borderRadius: 1,
          }}
          name="busness"
          onBlur={handleBlur}
          variant="outlined"
        />{" "}
        <br />
        <TextField
          id="outlined-multiline-static"
          placeholder="Write Your Review"
          multiline
          rows={4}
          sx={{
            width: "100%",
            marginY: 1,
            backgroundColor: "white",
            borderRadius: 1,
          }}
          name="comment"
          onBlur={handleBlur}
        />{" "}
        <br />
        <Stack spacing={1} sx={{ mt: 2, mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "semiBold",
                  textTransform: "capitalize",
                }}
                variant="h6"
                noWrap
                component="div"
              >
                Rate us:
              </Typography>
            </Box>
            <Box sx={{ marginLeft: 3 }}>
              <Rating
                name="rating"
                onBlur={handleBlur}
                defaultValue={0}
                size="large"
              />
            </Box>
          </Box>
        </Stack>
        <Box sx={{ width: "120px", margin: "auto" }}>
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
            Review
          </Button>
        </Box>
      </form>

      {reviewSuccessfull && (
        <Alert sx={{ marginTop: "20px" }} severity="success">
          review successfully !
        </Alert>
      )}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Reviews;
