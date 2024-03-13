import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = ({
  width,
  series,
  type,
  colors,
  showLegend,
  enableLabels,
  labels,
}) => {
  return (
    <ReactApexChart
      options={{
        chart: { type: type },
        colors,
        legend: { show: showLegend },
        dataLabels: { enabled: enableLabels },
        labels: labels,
      }}
      series={series}
      type={type}
      width={width}
    />
  );
};

export default PieChart;
