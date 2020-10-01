import React from 'react';
import "./style.css";
import NavbarElement from "./NavbarElement";
import {Col, Row} from "antd";

import {faHome, faRocket} from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  const navbarElements = [
    {title: "Home", icon: faHome},
    {title: "Eksperyment", icon: faRocket}
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
