import React from 'react';
import HomeSection from "../../section/HomeSection/HomeSection";
import Experiment from "../../section/Experiment/Experiment";
import SideNavbar from "../../component/SideNavbar/SideNavbar";
import {faHome, faRocket} from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const navbarLinks = [
    {id: 1, title: "Home", color: [24, 144, 255], icon: faHome, target: "homeSection"},
    {id: 2, title: "Eksperyment", color: [34, 38, 123], icon: faRocket, target: "mainDiv"} // todo id should be different
  ]

  return (
      <>
          <SideNavbar navbarLinks={navbarLinks}/>
          <HomeSection/>
          <Experiment/>
      </>
  );
}

export default LandingPage;
