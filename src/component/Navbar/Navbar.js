import React from 'react';
import "./style.css";
import NavbarElement from "./NavbarElement";
import {Col, Row} from "antd";

import {faHome, faRocket} from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  const navbarElements = [
    {id: 1, title: "Home", color: [24, 144, 255], icon: faHome, target: "#homeSection"},
    {id: 2, title: "Eksperyment", color: [34, 38, 123], icon: faRocket, target: "#mainDiv"} // todo id should be different
  ]

  return (
    <Row className="navbar" align="middle">
      <Col span={24}>
        {
          navbarElements.map(item => <NavbarElement title={item.title} icon={item.icon} target={item.target}
                                                    color={item.color} key={item.id}/>)
        }
      </Col>
    </Row>
  );
}
