import React, {Component} from 'react';
import {Row, Col} from 'antd';
import "./DashboardSection.css";
import ChartTile from  "../../component/DashboardTile/ChartTile"
import chartData from "./chartData"

class App extends Component{
    constructor(){
        super()
        this.state={
            chartTileConfig: {
                title:"CubeSat temperature",
                label:"temperature [°C]",
                data:chartData
            }
        }
        setInterval(()=> {
            var x = [...this.state.chartTileConfig.data]
            x.shift()
            x.push({primary: new Date(), secondary: Math.floor(Math.random()*50)})
            this.setState(old=>({
                ...old,
                chartTileConfig:{
                    ...old.chartTileConfig,
                    data:x
                }
            }))
        },5000)
    }
    

    render(){
        return(
            <Row  gutter={[16,16]} style={{margin:"0 auto"}}>
                <Col span={16}>
                    <ChartTile 
                        title={this.state.chartTileConfig.title}
                        label={this.state.chartTileConfig.label}
                        data={this.state.chartTileConfig.data}/>
                </Col>
                <Col span={8}>
                    <ChartTile 
                        title="Outside temperature"
                        label={this.state.chartTileConfig.label}
                        data={this.state.chartTileConfig.data}/>
                </Col>
                <Col span={12}>
                    <ChartTile 
                        title="Outside temperature"
                        label={this.state.chartTileConfig.label}
                        data={this.state.chartTileConfig.data}/>
                </Col>
                <Col span={12}>
                    <ChartTile 
                        title="Outside temperature"
                        label={this.state.chartTileConfig.label}
                        data={this.state.chartTileConfig.data}/>
                </Col>
                <Col span={24}>
                    <ChartTile 
                        title="Outside temperature"
                        label={this.state.chartTileConfig.label}
                        data={this.state.chartTileConfig.data}/>
                </Col>
            </Row> 
        );
    }
}

export default App;