import React from 'react';
import HomeSection from "../../section/HomeSection/HomeSection";
import Experiment from "../../section/Experiment/Experiment";
import Navbar from "../../component/Navbar/Navbar";

function LandingPage() {
    return (
        <>
            <Navbar />
            <HomeSection/>
            <Experiment/>
        </>
    );
}

export default LandingPage;
