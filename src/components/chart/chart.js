import React from "react";
import ChartBar from "./chartBar";
import './chart.css'

const Chart = (props) => {
    //here props is an array of object
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    //it returns array of values
    const totalMaximun = Math.max(...dataPointValues)
    //math.max needs multiple arguments
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
