import React from 'react';
import {Col, Layout, Row} from "antd";
import Title from "antd/lib/typography/Title";

import cubesat from "../../assets/img/cubesat.svg";
import "./cubesat.css"
import "./style.css"
import Star from "../../component/Star/Star";

const {Content} = Layout;

export default function HomeSection() {

  let stars = [];
  for (let i = 0; i < 50; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const opacity = Math.random() * 0.5;
    stars.push(<Star x={x} y={y} opacity={opacity} id={`star${i}`} key={i} />);
  }

  return (
    <Layout id="homeSection">
      <Content style={{backgroundColor: "#1f1f1f", color: "white"}}>
        <div className="starsContainer">{stars.map(star => star)}</div>
        <div className="reflection" style={{width: "300px", height: "300px"}} />
        <div className="reflection" style={{width: "400px", height: "400px"}} />
        <div className="reflection" style={{width: "500px", height: "500px"}} />
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
