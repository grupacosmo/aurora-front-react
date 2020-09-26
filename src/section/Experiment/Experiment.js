import React from "react";
import "./Experiment.css"
import ExperimentTile from "../../component/ExperimentTile/ExperimentTile";
import {Row, Col} from 'antd';


const Experiment = () => {
    return (
        <div id="mainDiv">
            <h1 className="Title">THE PILLARS OF DIGITAL</h1>
            <div id="tilesContainer">
                <Row gutter={[16,24]}>
                    <Col span={12} className="gutter-row"><ExperimentTile/></Col>
                    <Col span={12} className="gutter-row"><ExperimentTile/></Col>
                    <Col span={12} className="gutter-row"><ExperimentTile/></Col>
                    <Col span={12} className="gutter-row"><ExperimentTile/></Col>
                </Row>
            </div>
        </div>
    )
}

export default Experiment