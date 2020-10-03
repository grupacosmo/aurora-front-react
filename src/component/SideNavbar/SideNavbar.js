import React from 'react';
import "./style.css";
import SideNavbarElement from "./SideNavbarElement";
import {Col, Row} from "antd";

export default function SideNavbar(props) {
  const {navbarLinks} = props;

  return (
    <Row className="navbar" align="middle">
      <Col span={24}>
        {
          navbarLinks.map(item => <SideNavbarElement title={item.title} icon={item.icon} target={item.target}
                                                        color={item.color} key={item.id}/>)
        }
      </Col>
    </Row>
  );
}
