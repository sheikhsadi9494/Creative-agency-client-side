import React, {useLayoutEffect} from 'react';
import Navigation from '../../Shered/Header/Navigation';
import Banner from '../Banner/Banner';
import Logos from '../Logos/Logos';
import Reviews from '../Reviews/Reviews';
import SendUsMessage from '../SendUsMessage/SendUsMessage';
import Services from '../Services/Services';
import SomeOfOurWork from '../SomeOfOurWork/SomeOfOurWork';
import Footer from '../../Shered/Footer/Footer';
import NewsLetter from '../../Shered/NewsLetter/NewsLetter';
import PServices from '../PServices/Pservices';

const HomeContainer = () => {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = "white"
   });
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Logos></Logos>
            <Services></Services>
            <PServices></PServices>
            <SomeOfOurWork></SomeOfOurWork>
            <Reviews></Reviews>
            {/* <SendUsMessage></SendUsMessage> */}
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default HomeContainer;