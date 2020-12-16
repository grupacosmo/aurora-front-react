import React from 'react';
import { Card } from "antd";
import { Chart } from 'react-charts';
import "./ChartTile.css";
const { Meta } = Card;

function ChartTile(props) {

    const {title, label, data} = props;
    const chartData = React.useMemo(()=>[
      {
        label: label,
        data: data
      }
    ],[label, data])
    const axes = React.useMemo(()=>[
      { primary: true, type: 'utc', position: 'bottom', show: true},
      { type: 'linear', position: 'left' },
    ])
    
  return (
    <Card style={{width: "100%", height:200}}>
        <Meta
          title={title}
        />
        <div style={{margin: 10, width: "100%", height: 150}}>
          <Chart data={chartData} axes={axes} tooltip/>
        </div>
    </Card>
  );
}
export default ChartTile;