import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const LineChart = ({ series, options, width }) => {
  const Container = styled.div`
    width: 100%;
  `
  return (
    <Container>
      <ReactApexChart
        series={series}
        options={options}
        height={320}
        width={width}
        type="area"
      />
    </Container>
  );
};

export default LineChart;
