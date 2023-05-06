import React from "react";
import * as styled from "./TotalRevenueStyles";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { mainThemeColor } from "Css/Variables";
import BarChart from "components/Charts/BarChart/BarChart";
import {
  TotalRevenueOptions,
  TotalRevenueSeries,
} from "components/Charts/ChartsConfig";

const TotalRevenue = () => {
  const barChartWidth = () => {
    return "100%"
  };
  return (
    <styled.container>
      <styled.title>Total Revenue</styled.title>
      <styled.totalRevenueContainer>
        <styled.total>$33 000 000</styled.total>
        <styled.statistics>
          <BsArrowUpCircleFill fontSize={20} color={mainThemeColor} />
          <styled.statisticsInnerContainer>
            <styled.statisticsText>10%</styled.statisticsText>
            <styled.statisticsText>Than Last Month</styled.statisticsText>
          </styled.statisticsInnerContainer>
        </styled.statistics>
      </styled.totalRevenueContainer>
      <BarChart
        series={TotalRevenueSeries}
        height={310}
        options={TotalRevenueOptions}
        width={barChartWidth()}
      />
    </styled.container>
  );
};

export default TotalRevenue;
