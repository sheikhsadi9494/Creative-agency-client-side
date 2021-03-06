import React from 'react';
import Footer from '../Shered/Footer/Footer';
import Navigation from '../Shered/Header/Navigation';
import NewsLetter from '../Shered/NewsLetter/NewsLetter';
import OurPortfolioHeader from './OurPortfolioHeader';
import PortfolioService from './PortfolioService';
import SomeOfOurWork from '../../Pages/Home/SomeOfOurWork/SomeOfOurWork';

const PortfoiloContainer = () => {
    return (
        <div>
            <Navigation></Navigation>
            <OurPortfolioHeader></OurPortfolioHeader>
            <PortfolioService></PortfolioService>
            <SomeOfOurWork></SomeOfOurWork>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default PortfoiloContainer;