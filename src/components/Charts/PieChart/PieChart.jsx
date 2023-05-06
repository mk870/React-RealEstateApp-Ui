import React from "react";
import * as styled from "./PieChartStyles";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ title, series, value, colors }) => {
  return (
    <styled.container>
      <styled.textContainer>
        <styled.title>{title}</styled.title>
        <styled.number>{value}</styled.number>
      </styled.textContainer>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </styled.container>
  );
};

export default PieChart;
