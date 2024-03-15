import React from "react";
import * as styled from "./HeatMapStyles";
import ReactApexChart from "react-apexcharts";
import {
  classFive,
  classFour,
  classOne,
  classSix,
  classThree,
  classTwo,
  heatMapOptions,
  series,
} from "./Data/Data";

const HeatMap = () => {
  const showLabelsDescription = () => {
    if (window.matchMedia("(max-width: 500px)").matches) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <styled.container>
      <styled.title>
        Sales Heat Map <styled.text>(last 6 months)</styled.text>
      </styled.title>
      <styled.chartWrapper>
        <ReactApexChart
          options={heatMapOptions}
          series={series}
          type="heatmap"
          width={"100%"}
          height={"100%"}
        />
      </styled.chartWrapper>
      {showLabelsDescription() && (
        <styled.labelWrapper>
          <styled.label>
            <span>Type1:</span>
            {` ${classOne}`}
          </styled.label>
          <styled.label>
            <span>Type2:</span>
            {` ${classTwo}`}
          </styled.label>
          <styled.label>
            <span>Type3:</span>
            {` ${classThree}`}
          </styled.label>
          <styled.label>
            <span>Type4:</span>
            {` ${classFour}`}
          </styled.label>
          <styled.label>
            <span>Type5:</span>
            {` ${classFive}`}
          </styled.label>
          <styled.label>
            <span>Type6:</span>
            {` ${classSix}`}
          </styled.label>
        </styled.labelWrapper>
      )}
    </styled.container>
  );
};

export default HeatMap;
