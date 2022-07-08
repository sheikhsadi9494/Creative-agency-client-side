import React, { useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Navigation from '../../Shered/Header/Navigation'
import ServicesHeader from '../ServicesHeader/ServicesHeader';
import AllServices from '../AllServices/AllServices';

const ServicesContainer = () => {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = "white"
   });
    return (
        <Box>
            <Navigation></Navigation>
             <ServicesHeader></ServicesHeader>
             <AllServices></AllServices>
        </Box>
    );
};

export default ServicesContainer;
