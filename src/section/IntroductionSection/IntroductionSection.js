import React from "react";
import {Row,Col} from "antd"
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

import "./IntroductionSection.css"
import city from "../../assets/img/city.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const IntroductionSection = () => {
    return (
        <div id="IntroSection">
            <div id="PhotoContainer">
                <img id="photo"
                     src={city}
                     alt="city"
                />
            </div>
            <div id="Background"/>
            <div id="ContentContainer">
                <Row>
                    <Col span={24}>
                        <h1>Cel Projektu</h1>
                    </Col>
                    <Col span={12} offset={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu
                            consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies efficitur</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} offset={9}>
                        <FontAwesomeIcon className="IntroIcon" icon={faAngleDown}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default IntroductionSection