import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ series, options, width }) => {
  return (
    <div style={{ width: "100%" }} id="chart">
      <ReactApexChart
        series={series}
        options={options}
        height={320}
        width={width}
        type="line"
      />
    </div>
  );
};

export default LineChart;
