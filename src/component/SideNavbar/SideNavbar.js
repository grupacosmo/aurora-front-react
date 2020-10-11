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
          navbarLinks.map(link =>
            <SideNavbarElement
              title={link.title}
              icon={link.icon}
              target={link.target}
              color={link.color}
              key={link.id}
            />
          )
        }
      </Col>
    </Row>
  );
}
