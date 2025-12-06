import React from 'react';
import Banner from './Banner';
import WeekSpecials from './WeekSpecials';
import Testimonials from './Testimonials';
import About from './About';
const Home = () => {
    return (
        <div className="homecontainer">
            <Banner />
            <WeekSpecials />
            <Testimonials />
            <About/>
        </div>
    );
};

export default Home;