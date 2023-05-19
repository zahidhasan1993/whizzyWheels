import React from 'react';
import Header from '../extra/Header';
import Gallery from '../extra/Gallery';
import { TabTitle } from '../changeTitle';


const Home = () => {
    TabTitle('Home | WhizzyWheels')
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            
            
        </div>
    );
};

export default Home;