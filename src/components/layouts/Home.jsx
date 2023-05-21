import React from 'react';
import Header from '../extra/Header';
import Gallery from '../extra/Gallery';
import { TabTitle } from '../changeTitle';
import WhizzyTabs from '../extra/WhizzyTabs';
import CustomerReview from '../extra/CustomerReview';
import FeedBack from '../extra/FeedBack';


const Home = () => {
    TabTitle('Home | WhizzyWheels')
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <WhizzyTabs></WhizzyTabs>
            <CustomerReview></CustomerReview>
            <FeedBack></FeedBack>
            
        </div>
    );
};

export default Home;