import React from "react";
import {Row, Col} from "antd"
import {Link} from "react-scroll";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

import "./IntroductionSection.css"
import Square from "../../component/Square/Square";
import Comet from "../../component/Comet/Comet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const IntroductionSection = (props) => {
    return (
        <div id="IntroSection">
            {/*<div id="SquaresContainer">*/}
            {/*    <Square/>*/}
            {/*    <Square/>*/}
            {/*    <Square/>*/}
            {/*</div>*/}
            <div id="CometContainer">
                <Comet/>
                <Comet/>
                <Comet/>
                <Comet/>
                <Comet/>
            </div>
                <Row>
                    <Col span={18} offset={3}>
                        <div id="CardBox">
                            <Row>
                                <Col span={24}>
                                    <h1>Cel Projektu</h1>
                                </Col>
                                <Col span={12} offset={6}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue
                                        facilisis
                                        augue, eu
                                        consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies
                                        efficitur</p>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col span={6} offset={9}>
                                <Link to={props.target}
                                      spy={true}
                                      smooth={true}
                                      duration={1000}
                                      activeClass=" ">
                                <FontAwesomeIcon className="IntroIcon" icon={faAngleDown}/></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </div>
    )
}

export default IntroductionSection