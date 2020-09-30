import React, {useEffect, useRef, useState} from "react";
import "./Experiment.css"
import ExperimentTile from "../../component/ExperimentTile/ExperimentTile";
import {Row, Col} from 'antd';
import {faSitemap, faSatellite, faSatelliteDish, faRobot} from '@fortawesome/free-solid-svg-icons'

const tileData = [
    {
        icon: faSitemap,
        title: "Architektura",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        translate:"-"
    },
    {
        icon: faSatellite,
        title: "Zasilanie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        translate:""
    },
    {
        icon: faSatelliteDish,
        title: "Komunikacja",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        translate:"-"
    },
    {
        icon: faRobot,
        title: "Sztuczna Inteligencja",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        translate:""
    }
]

const Experiment = () => {
    const [isRendered, setIsRendered] = useState(false)
    const [opacity, setOpacity] = useState(0)
    const [translate, setTranslate] = useState("100px")
    const myRef = useRef();

    useEffect(() => {
        const {y} = myRef.current.getBoundingClientRect()

        //Będzie to wysokość od której tytuł bedą się pojawiać
        const titleScrollHeight = y - window.innerHeight + 50 + window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > titleScrollHeight && !isRendered) {
                setIsRendered(true);
                setOpacity(1)
                setTranslate("0px")
            }
            if (currentScrollY < titleScrollHeight && isRendered) {
                setIsRendered(false);
                setOpacity(0)
                setTranslate("100px")
            }
        }
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isRendered,myRef])

    const style = {
        opacity: opacity,
        transform: `translate(0,${translate})`,
        transition: "opacity 1s, transform 1s"
    }

    return (
        <div id="mainDiv">
            <div id="titleContainer" style={style} ref={myRef}>
                <Row>
                    <Col span={24}>
                        <h1 id="title">Experymenty Aurory</h1>
                    </Col>
                    <Col span={12} offset={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu
                            consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies efficitur</p>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xl={{span:18, offset:3}} sm={{span:22, offset:1}}>
                    <div id="tilesContainer">
                        <Row gutter={[{sm: 32}, 24]}>
                            <Col md={{span: 12}} className="gutter-row">
                                <ExperimentTile data={tileData[0]}/>
                            </Col>
                            <Col md={{span: 12}} className="gutter-row">
                                <ExperimentTile data={tileData[1]}/>
                            </Col>
                            <Col md={{span: 12}} className="gutter-row">
                                <ExperimentTile data={tileData[2]}/>
                            </Col>
                            <Col md={{span: 12}} className="gutter-row">
                                <ExperimentTile data={tileData[3]}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Experiment