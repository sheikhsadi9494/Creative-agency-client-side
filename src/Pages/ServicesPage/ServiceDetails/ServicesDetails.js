import {
  Alert,
    Button,
  Grid,
  Rating,
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

      <Grid sx={{justifyContent: 'space-evenly',marginTop: "40px", alignItems: 'center'}} container spacing={2}>
         <Grid item lg={5} md={5} xs={11}>
             <Box
              sx={{
                width: "100%",
                marginX: "auto",
              }}
            >
              <img style={{ width: "100%" }} src={img} alt="" />
            </Box>
            {
        orderSuccessfull &&
        <Alert sx={{width: '95%', marginX: 'auto', marginTop: '20px'}} severity="success">Order Confirm Successful !</Alert>
      }
            {/* <Typography sx={{fontWeight: 'bold', marginTop: 2}} variant="h5" gutterBottom component="div">
                   {serviceName}
            </Typography> */}
         </Grid>
         <Grid item lg={5} md={5} xs={11}>
          <Box sx={{marginBottom: '40px'}}>
              <Box sx={{ marginX: 'auto'}}>
                {/* heading start */}
                <Box sx={{marginBottom: '30px'}}>
                   <Typography sx={{fontWeight: 'semibold'}} variant="h4" gutterBottom component="div">
                   {serviceName}
                   </Typography>
                   <Box sx={{display: 'flex'}}>
                      <Box>
                        <Rating sx={{marginTop: '-30px'}} name="size-large" defaultValue={5} readOnly />
                      </Box>
                      <Box sx={{paddingLeft: 1}}>
                        <Typography sx={{color: '#EFB101'}} variant="body2" gutterBottom component="div">
                          Based on 185 reviews
                        </Typography>
                      </Box>
                   </Box>
                   <hr style={{border: '0.7px solid #CCCCCC', backgroundColor: '#CCCCCC'}} />
                </Box>
                {/* heading end  */}
                {/* body  */}
                <Box>
                    <Typography sx={{marginTop: '-10px', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                      Price: $ {price}
                    </Typography>
                    <Typography sx={{marginTop: '-10px', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                      Delevery Time: {DeleveryTime}
                    </Typography>
                    <Typography sx={{marginTop: '-5px'}} variant="body1" gutterBottom component="div">
                      {discription}
                    </Typography>
                </Box>
                <Box sx={{marginTop: '30px'}}>
                    <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                      What we provide ?
                    </Typography>
                    <ul>
                      <li>24 hours costomer sopport</li>
                      <li>5 peapule team will work on your project</li>
                      <li>Immediate slove to your problem </li>
                      <li>We commited to delivar your project on time</li>
                    </ul>
                </Box>
                 <Button variant="contained" onClick={handleModalOpen} sx={{textTransform: 'capitalize', px: 4, marginTop: 3}}>purchase</Button>
              </Box>
          </Box>
         </Grid>
       </Grid>

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
