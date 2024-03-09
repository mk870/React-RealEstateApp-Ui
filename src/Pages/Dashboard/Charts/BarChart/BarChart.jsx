import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = ({ series, height, options, width }) => {
  return (
    <div style={{ width: "100%" }}>
      <ReactApexChart
        series={series}
        type="bar"
        height={height}
        options={options}
        width={width}
      />
    </div>
  );
};

export default BarChart;
