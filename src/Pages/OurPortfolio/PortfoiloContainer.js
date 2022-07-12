import React from 'react';
import Navigation from '../Shered/Header/Navigation';
import NewsLetter from '../Shered/NewsLetter/NewsLetter';
import OurPortfolioHeader from './OurPortfolioHeader';
import PortfolioService from './PortfolioService';

const PortfoiloContainer = () => {
    return (
        <div>
            <Navigation></Navigation>
            <OurPortfolioHeader></OurPortfolioHeader>
            <PortfolioService></PortfolioService>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default PortfoiloContainer;