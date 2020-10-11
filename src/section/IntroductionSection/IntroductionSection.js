import React from "react";
import {Row, Col} from "antd"
import {Link} from "react-scroll";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

import "./IntroductionSection.css"

import Comet from "../../component/Comet/Comet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const IntroductionSection = (props) => {
    return (
        <div id="IntroSection">
            <div id="CometContainer">
                <Comet/>
                <Comet/>
                <Comet/>
                <Comet/>
                <Comet/>
            </div>
            <Row>
                <Col xl={{span:18, offset:3}} sm={{span:20, offset:2}} xs={{span:20, offset:2}}>
                    <div id="CardBox">
                        <Row>
                            <Col span={24}>
                                <h1>Cel Projektu</h1>
                            </Col>
                            <Col md={{span:16, offset:4}} sm={{span:20, offset:2}} xs={{span:20, offset:2}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi.
                                    Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Sed facilisis,
                                    odio ac dignissim finibus, arcu magna facilisis nunc, vitae sodales nibh quam eget
                                    nisi. Integer vel diam eu massa placerat fringilla. Vestibulum metus mi, viverra a
                                    mattis blandit, luctus et massa. Praesent vestibulum efficitur egestas. Curabitur
                                    posuere nibh augue, quis porttitor mi lobortis non. Pellentesque non bibendum purus.
                                    Vestibulum eu enim vel tortor consequat egestas. Nunc sed vestibulum ante. Maecenas
                                    egestas diam lacus, accumsan facilisis risus consectetur at. </p>
                            </Col>
                        </Row>
                    </div>
                    <Link to={props.target}
                          spy={true}
                          smooth={true}
                          duration={1000}
                          activeClass=" ">
                        <FontAwesomeIcon className="IntroIcon" icon={faAngleDown}/>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default IntroductionSection