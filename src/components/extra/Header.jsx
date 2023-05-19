import React from 'react';
import Slider from './Slider';

const Header = () => {
    return (
        <div className='my-14 md:grid md:grid-cols-2 mt-20 md:gap-16'>
            <Slider></Slider>
            <div className='mt-10 md:mt-0'>
                <h1 className='text-5xl font-bold'><span className='text-amber-700'>Best Toy Car</span> Selling <br /> Brand Online</h1>
                <p className='mt-10 text-gray-600 text-xl'>Welcome to our car toy selling brand Whizzy<span className='text-amber-700'>Wheels</span>, where imagination takes the wheel and excitement knows no bounds! Get ready to ignite your child's imagination and embark on thrilling car toy adventures. From sleek sports cars to rugged off-roaders, our carefully curated collection offers a wide range of high-quality toys that are designed to fuel hours of creative play. Buckle up and let the joy of endless possibilities unfold as your little ones race, explore, and create unforgettable memories with our exceptional car toys. Get ready to rev up the fun and let their imaginations soar to new heights!</p>
            </div>
        </div>
    );
};

export default Header;