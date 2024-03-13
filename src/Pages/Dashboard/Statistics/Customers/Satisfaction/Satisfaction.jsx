import React from "react";
import ReactApexChart from "react-apexcharts";

import * as styled from "./SatisfactionStyles";
import { RadialBarOptions } from "./Utilis/Utilis";

const Satisfaction = () => {
  return (
    <styled.container>
      <styled.title>Customer Satisfaction</styled.title>
      <styled.text>From all Products</styled.text>
      <styled.Chart>
        <ReactApexChart
          options={RadialBarOptions}
          width={"180px"}
          series={[92]}
          type="radialBar"
          height={"180px"}
        />
        <styled.text>Based on likes</styled.text>
      </styled.Chart>
    </styled.container>
  );
};

export default Satisfaction;
