import React from 'react';
import "./style.css";
import NavbarElement from "./NavbarElement";
import {Col, Row} from "antd";

import {faHome, faRocket} from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  const navbarElements = [
    {title: "Home", color: [24, 144, 255], icon: faHome, target: "#homeSection"},
    {title: "Eksperyment", color: [34, 38, 123], icon: faRocket, target: "#mainDiv"} // todo id should be different
  ]

  return (
    <Row className="navbar" align="middle">
      <Col span={24}>
        {
          navbarElements.map(item => <NavbarElement title={item.title} icon={item.icon} />)
        }
      </Col>
    </Row>
  );
}
