import { backgroundColor, secondaryThemeColor } from "Css/Variables";
import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const RadialChart = ({ width, series, fillColor, label }) => {
  const Container = styled.div`
    margin: -7px ;
    border: 1px solid red;
  `;
  return (
    <Container>
      <ReactApexChart
        options={{
          chart: {
            type: "radialBar",
            // width: "100px",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: "70%",
              },
              track: {
                background: backgroundColor,
                strokeWidth:"80",
              },
              dataLabels: {
                name: {
                  color: secondaryThemeColor,
                  fontSize: "15px",
                },
                value: {
                  fontSize: "13px",
                  fontWeight: "900",
                },
              },
            },
          },
          fill: {
            colors: fillColor,
          },
          stroke: {
            lineCap: "round",
            width: 10,
          },
          labels: label,
        }}
        type="radialBar"
        // width={width}
        series={series}
      />
    </Container>
  );
};

export default RadialChart;
