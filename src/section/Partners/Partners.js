import React from 'react'
import 'antd/dist/antd.css';
import './Partners.css'
import { Row, Col } from 'antd';

import pk from './img/pk.png'	
import wiit from './img/wiit.png'	
import katedra from './img/katedra.png'	
import futurelab from './img/futurelab.png'	
import botland from './img/botland.png'	
import balticsat from './img/balticsat.png'

function Partners() {
	return (
	<div id="partnersSection">
        <div className="partners">
			<hr />
			<h1>Nasi partnerzy</h1>

			<Row className="firstRow">
                <Col xs={24} xl={8}>
                    <a href="#"><img src={pk} alt="pk" /></a>
                </Col>

                <Col xs={24} xl={8}>
                    <a href="#"><img src={katedra} alt="katedra" /></a>
                </Col>

                <Col xs={24} xl={8}>
                    <a href="#"><img src={futurelab} alt="futurelab" /></a>
                </Col>
            </Row>

            <Row className="secondRow">
                <Col xs={24} xl={8}>
                    <a href="#"><img src={wiit} alt="wiit" /></a>
                </Col>

                <Col xs={24} xl={8}>
                    <a href="#"><img src={botland} alt="botland" /></a>
                </Col>

                <Col xs={24} xl={8} className="balticLogo">
                    <a href="#"><img src={balticsat} alt="balticsat" /></a>
                </Col>
            </Row>

        </div>
	</div>
	)
}

export default Partners