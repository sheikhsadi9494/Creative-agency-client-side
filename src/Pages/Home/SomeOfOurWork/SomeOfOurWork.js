import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function App() {
  return (
    <Box style={{ backgroundColor: "#111430" }}>
      <Box sx={{paddingTop: 10, paddingBottom: 5}}>
        <Typography variant="h4" sx={{color: 'white', fontWeight: 'bold', textAlign: 'center'}} gutterBottom component="div">
          Here are some of <span style={{color: '#08C137'}}>our works </span>
        </Typography>
      </Box>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        ;
        <SwiperSlide>
          <Box>
            <img
              src="https://i.ibb.co/T1scjBh/carousel-1.png"
              alt=""
              srcset=""
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <img
              src="https://i.ibb.co/ctt5LvT/carousel-2.png"
              alt=""
              srcset=""
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <img
              src="https://cdn.dribbble.com/users/1483413/screenshots/10733343/digital_marketing_dribbble_mockup_4x.png"
              alt=""
              srcset=""
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <img
              src="https://designshack.net/wp-content/uploads/cathyc.jpg"
              alt=""
              srcset=""
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

{
  /* <SwiperSlide>
<Box>
    <img src="https://i.ibb.co/T1scjBh/carousel-1.png" alt="" srcset="" />
</Box>
</SwiperSlide>
<SwiperSlide>
<Box>
    <img src="https://i.ibb.co/ctt5LvT/carousel-2.png" alt="" srcset="" />
</Box>
</SwiperSlide>
<SwiperSlide>
<Box>
    <img src="https://i.ibb.co/ynyz7RB/carousel-3.png" alt="" />
</Box>
</SwiperSlide> */
}
