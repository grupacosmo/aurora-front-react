import React from 'react';
import HomeSection from "../../section/HomeSection/HomeSection";
import Experiment from "../../section/Experiment/Experiment";
import IntroductionSection from "../../section/IntroductionSection/IntroductionSection";

import SideNavbar from "../../component/SideNavbar/SideNavbar";
import {faHome, faRocket} from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const navbarLinks = [
    {id: 1, title: "Home", color: [24, 144, 255], icon: faHome, target: "homeSection"},
    {id: 2, title: "Eksperyment", color: [34, 38, 123], icon: faRocket, target: "experimentSection"}
  ]

  return (
      <>
          <SideNavbar navbarLinks={navbarLinks}/>
          <HomeSection/>
          <IntroductionSection target="experimentSection"/>
          <Experiment/>
      </>
  );
}

export default LandingPage;
