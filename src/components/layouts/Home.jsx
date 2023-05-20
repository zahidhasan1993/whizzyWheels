import React from 'react';
import Header from '../extra/Header';
import Gallery from '../extra/Gallery';
import { TabTitle } from '../changeTitle';
import WhizzyTabs from '../extra/WhizzyTabs';


const Home = () => {
    TabTitle('Home | WhizzyWheels')
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <WhizzyTabs></WhizzyTabs>
            
        </div>
    );
};

export default Home;