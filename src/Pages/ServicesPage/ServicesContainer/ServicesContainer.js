import React, { useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Navigation from '../../Shered/Header/Navigation'
import ServicesHeader from '../ServicesHeader/ServicesHeader';
import AllServices from '../AllServices/AllServices';
import NewsLetter from '../../Shered/NewsLetter/NewsLetter';
import Footer from '../../Shered/Footer/Footer';

const ServicesContainer = () => {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = "white"
   });
    return (
        <Box>
            <Navigation></Navigation>
             <ServicesHeader></ServicesHeader>
             <AllServices></AllServices>
             <NewsLetter></NewsLetter>
             <Footer></Footer>
        </Box>
    );
};

export default ServicesContainer;
