import React from 'react';
import {Col, Layout, Row} from "antd";
import Title from "antd/lib/typography/Title";

import cubesat from "../../assets/img/cubesat.svg";
import "./cubesat.css"
import "./style.css"

const {Content} = Layout;

export default function HomeSection() {
  return (
    <Layout id="homeSection">
      <Content style={{backgroundColor: "#1f1f1f", color: "white"}}>
        <Row align="middle" style={{padding: "100px 5px", textAlign: "center"}}>
          <Col span={24} sm={14} md={12}>
            <div style={{textAlign: "left", display: "inline-block"}}>
              <Title style={{color: "#1890ff", fontSize: "100px", fontWeight: "normal"}} className="title">Aurora</Title>
              <h1 style={{color: "#bfbfbf", fontWeight: "lighter", fontSize: "40px", marginBottom: 0}}>Catchy slogan</h1>
              <h2 style={{color: "#fafafa", fontWeight: "lighter"}}>Lorem ipsum dolor sit amet</h2>
            </div>
          </Col>
          <Col span={24} sm={10} md={12} style={{textAlign: "center"}}>
            <img id="cubesatImg" src={cubesat} alt="cubesat" style={{width: "90%"}} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
