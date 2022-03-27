import React from 'react';
import Navigation from '../../Shered/Header/Navigation';
import Banner from '../Banner/Banner';
import Logos from '../Logos/Logos';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const HomeContainer = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Logos></Logos>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default HomeContainer;