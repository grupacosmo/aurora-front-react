import React from 'react';
import HomeSection from "../../section/HomeSection/HomeSection";
import Experiment from "../../section/Experiment/Experiment";
import IntroductionSection from "../../section/IntroductionSection/IntroductionSection";

function LandingPage() {
    return (
        <>
            <HomeSection/>
            <IntroductionSection target="mainDiv"/>
            <Experiment/>
        </>
    );
}

export default LandingPage;
