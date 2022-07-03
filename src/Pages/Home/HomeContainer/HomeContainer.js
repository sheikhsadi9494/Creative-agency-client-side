import React from 'react';
import Navigation from '../../Shered/Header/Navigation';
import Banner from '../Banner/Banner';
import Logos from '../Logos/Logos';
import Reviews from '../Reviews/Reviews';
import SendUsMessage from '../SendUsMessage/SendUsMessage';
import Services from '../Services/Services';
import SomeOfOurWork from '../SomeOfOurWork/SomeOfOurWork';

const HomeContainer = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Logos></Logos>
            <Services></Services>
            <SomeOfOurWork></SomeOfOurWork>
            <Reviews></Reviews>
            <SendUsMessage></SendUsMessage>
        </div>
    );
};

export default HomeContainer;