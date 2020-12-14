import React from 'react';
import HomeSection from "../../section/HomeSection/HomeSection";
import IntroductionSection from "../../section/IntroductionSection/IntroductionSection";
import Experiment from "../../section/Experiment/Experiment";
import Partners from "../../section/Partners/Partners";
import SocialMedia from "../../section/SocialMedia/SocialMedia";
import Footer from "../../section/Footer/Footer";
import SideNavbar from "../../component/SideNavbar/SideNavbar";
import {faHome, faBullseye, faRocket, faUsers, faPaperPlane, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const navbarLinks = [
    {id: 1, title: "Home", color: [24, 144, 255], icon: faHome, target: "homeSection"},
    {id: 2, title: "Cel", color: [113, 46, 206], icon: faBullseye, target: "IntroSection"},
    {id: 3, title: "Eksperyment", color: [34, 38, 123], icon: faRocket, target: "experimentSection"},
    {id: 4, title: "Partnerzy", color: [0, 0, 205], icon: faUsers, target: "partnersSection"},
    {id: 5, title: "Social media", color: [104, 9, 172], icon: faPaperPlane, target: "mediaSection"},
    {id: 6, title: "Footer", color: [100, 149, 237], icon: faAngleDoubleDown, target: "footerSection"},
  ]

  return (
      <>
          <SideNavbar navbarLinks={navbarLinks}/>
          <HomeSection/>
          <IntroductionSection />
          <Experiment/>
          <Partners/>
          <SocialMedia/>
          <Footer/>
      </>
  );
}

export default LandingPage;
