import {
  Alert,
    Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../Shered/Header/Navigation";
import BookingModal from "../BookingModal/BookingModal";

const ServicesDetails = () => {
  const { servicesId } = useParams();
  const [servicesDetails, setServicesDetails] = useState([]);
  const [orderSuccessfull, setOrderSuccessful] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${servicesId}`)
      .then((res) => res.json())
      .then((data) => setServicesDetails(data));
  }, []);

  const { serviceName, img, discription, price, DeleveryTime } = servicesDetails;

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Box>
      <Navigation></Navigation>
      {
        orderSuccessfull &&
        <Alert sx={{width: '75%', marginX: 'auto', marginTop: '40px'}} severity="success">Placeorder Successful !</Alert>
      }
      <Box sx={{marginBottom: '40px'}}>
        <Box
          sx={{
            width: "50%",
            marginX: "auto",
            marginTop: "40px",
          }}
        >
          <img style={{ width: "100%" }} src={img} alt="" />
        </Box>
        <Box sx={{width: '50%', marginX: 'auto'}}>
        <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
          {serviceName}
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          price: $ {price}
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          delevery time: {DeleveryTime}
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          {discription}
        </Typography>
        <Button variant="contained" onClick={handleModalOpen}>Place Order</Button>
        </Box>
      </Box>

      <BookingModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        servicesDetails={servicesDetails}
        setOrderSuccessful={setOrderSuccessful}
      ></BookingModal>
    </Box>
  );
};

export default ServicesDetails;
