import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ modalOpen, handleModalClose, servicesDetails, setOrderSuccessful}) => {
  const {user}= useAuth();
  const { serviceName, img, discription, price, DeleveryTime } = servicesDetails;

  const initialInfo = {clientName: user.displayName, email: user.email}
  const [orderDetails, setOrderDetails] = useState(initialInfo);

  const handleBlur = e => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = {...orderDetails};
    newDetails[field] = value;
    setOrderDetails(newDetails);
  }

  const handleOrderSubmit = e => {
    e.preventDefault();
      //collact data
      const order = {
        ...orderDetails,
        serviceName,
        img, 
        discription,
        price,
        DeleveryTime,
        status: "Pending",
      }
      //send data to the server
      fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setOrderSuccessful(true);
          handleModalClose();
        }
      })
  }
  return (
    <>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalOpen}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalOpen}>
        <Box style={{textAlign: 'center'}} sx={style}>
          <Typography sx={{fontWeight: 'bold', marginBottom: 3}} id="transition-modal-title" variant="h5" component="h2">
            {serviceName}
          </Typography>
          <form onSubmit={handleOrderSubmit}>
          <Typography sx={{fontWeight: 'semibold', marginBottom: 1}} id="transition-modal-title" variant="h6" component="h2">
            Your/Company Name: {user.displayName}
          </Typography>
          <Typography sx={{fontWeight: 'semibold', marginBottom: 1}} id="transition-modal-title" variant="h6" component="h2">
            Email: {user.email}
          </Typography>
          <Typography sx={{fontWeight: 'semibold', marginBottom: 1}} id="transition-modal-title" variant="h6" component="h2">
            Service Name: {serviceName}
          </Typography>
          <Typography sx={{fontWeight: 'semibold', marginBottom: 1}} id="transition-modal-title" variant="h6" component="h2">
            Price: {price} USD
          </Typography>
            {/* <TextField
              label="Your Name"
              sx={{ width: "95%", margin: 1 }}
              name='clientName'
              defaultValue={user.displayName}
              onBlur={handleBlur}
              size="small" />
            <TextField
              label="Your Email"
              sx={{ width: "95%", margin: 1 }}
              name="email"
              defaultValue={user.email}
              onBlur={handleBlur}
              size="small" />
            <TextField
              label="Service Name"
              sx={{ width: "95%", margin: 1 }}
              name='serviceName'
              defaultValue={serviceName}
              onBlur={handleBlur}
              size="small" />
            <TextField
              label="Project Details"
              sx={{ width: "95%", margin: 1 }}
              multiline
              rows={4}
              name="projectDetails"
              defaultValue={discription}
              onBlur={handleBlur} />
            <TextField
              label="Price"
              sx={{ width: "95%", margin: 1 }}
              name="price"
              defaultValue={`${price} USD`}
              onBlur={handleBlur}
              size="small" 
              /> */}
            <Box sx={{width: '200px', margin: 'auto',}}>
               <Button sx={{textTransform: 'capitalize', width: '100%', marginTop: '40px'}} type="submit" variant="contained">Order Comfirm</Button>
            </Box>
          </form>
        </Box>
      </Fade>
    </Modal>
    </>
  );
};

export default BookingModal;
