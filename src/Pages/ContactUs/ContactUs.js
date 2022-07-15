import React from 'react';
import SendUsMessage from '../Home/SendUsMessage/SendUsMessage';
import Navigation from '../Shered/Header/Navigation';
import ContactUsBanner from './ContactUsBanner';
import GetInTouch from './GetInTouch';
import Footer from '../Shered/Footer/Footer';
import NewsLetter from '../Shered/NewsLetter/NewsLetter';

const ContactUs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ContactUsBanner></ContactUsBanner>
            <GetInTouch></GetInTouch>
            <SendUsMessage></SendUsMessage>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;