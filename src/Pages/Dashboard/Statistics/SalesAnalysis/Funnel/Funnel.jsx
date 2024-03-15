import React from "react";
import * as styled from "./FunnelStyles";
import ReactApexChart from "react-apexcharts";
import {
  fifthLabel,
  firstLabel,
  fourthLabel,
  funnelOptions,
  secondLabel,
  seventhLabel,
  sixthLabel,
  thirdLabel,
} from "./Data/Data";

const Funnel = () => {
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
        Sales Funnel <styled.text>(last 6 months)</styled.text>
      </styled.title>
      <styled.chartWrapper>
        <ReactApexChart
          series={[
            {
              name: "Funnel Series",
              data: [1380, 1100, 990, 880, 740, 548, 330],
            },
          ]}
          options={funnelOptions}
          type="bar"
          width={"100%"}
          height={"100%"}
        />
      </styled.chartWrapper>
      {showLabelsDescription() && (
        <styled.labelWrapper>
          <styled.label>
            <span>1st:</span>
            {` ${firstLabel}`}
          </styled.label>
          <styled.label>
            <span>2nd:</span>
            {` ${secondLabel}`}
          </styled.label>
          <styled.label>
            <span>3rd:</span>
            {` ${thirdLabel}`}
          </styled.label>
          <styled.label>
            <span>4th:</span>
            {` ${fourthLabel}`}
          </styled.label>
          <styled.label>
            <span>5th:</span>
            {` ${fifthLabel}`}
          </styled.label>
          <styled.label>
            <span>6th:</span>
            {` ${sixthLabel}`}
          </styled.label>
          <styled.label>
            <span>7th:</span>
            {` ${seventhLabel}`}
          </styled.label>
        </styled.labelWrapper>
      )}
    </styled.container>
  );
};

export default Funnel;
