import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsGridCard from '../components/News/NewsGridCard';
import Footer from '../components/Layouts/Footer';

class Noutati extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Noutati"
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Noutati"
                /> 
                <NewsGridCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Noutati;