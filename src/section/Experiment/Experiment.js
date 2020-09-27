import React,{useRef} from "react";
import "./Experiment.css"
import ExperimentTile from "../../component/ExperimentTile/ExperimentTile";
import {Row, Col} from 'antd';


const Experiment = () => {
    const el = useRef(null);
    return (
        <div id="mainDiv">
            <h1 className="Title">THE PILLARS OF DIGITAL</h1>
            <Row>
                <Col span={18} offset={3}>
                    <div id="tilesContainer">
                        <Row gutter={[32, 24]}>
                            <Col span={12} className="gutter-row">
                                <ExperimentTile translate={"-"} ref={el}/>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <ExperimentTile translate={""}/>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <ExperimentTile translate={"-"}/>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <ExperimentTile translate={""}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Experiment