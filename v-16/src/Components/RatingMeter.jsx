import React from "react";
import FusionCharts from "fusioncharts";
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const dataSource = {
  chart: {
    caption: "Nordstorm's Customer Satisfaction Score for 2017",
    lowerlimit: "0",
    upperlimit: "100",
    showvalue: "1",
    numbersuffix: "%",
    theme: "fusion",
    showtooltip: "0",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "50",
        code: "#F2726F",
      },
      {
        minvalue: "50",
        maxvalue: "75",
        code: "#FFC533",
      },
      {
        minvalue: "75",
        maxvalue: "100",
        code: "#62B58F",
      },
    ],
  },
  dials: {
    dial: [
      {
        value: "81",
      },
    ],
  },
};

class RatingMeter extends React.Component {
  render() {
    return (
      <>
        <h1>Rating Meter</h1>
        <ReactFC
          type="angulargauge"
          width="600"
          height="400"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </>
    );
  }
}

export default RatingMeter;
