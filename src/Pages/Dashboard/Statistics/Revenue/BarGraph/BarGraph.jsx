import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

import { mainThemeColor } from "Css/Variables";
import BarChart from "Pages/Dashboard/Charts/BarChart/BarChart";
import {
  TotalRevenueOptions,
  TotalRevenueSeries,
} from "Pages/Dashboard/Charts/ChartsConfig";
import Counter from "Pages/Dashboard/Counter/Counter";
import * as styled from "./BarGraphStyles";
import { useSelector } from "react-redux";

const BarGraph = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const barChartWidth = () => {
    return "100%";
  };
  return (
    <styled.container>
      <styled.title>Total Revenue</styled.title>
      <styled.totalRevenueContainer>
        <styled.total>
          $<Counter amount={33} /> 000 000
        </styled.total>
        <styled.statistics>
          <BsArrowUpCircleFill fontSize={20} color={mainThemeColor} />
          <styled.statisticsInnerContainer>
            <styled.statisticsText>
              <Counter amount={10} speed={10} />%
            </styled.statisticsText>
            <styled.statisticsText>Than Last Month</styled.statisticsText>
          </styled.statisticsInnerContainer>
        </styled.statistics>
      </styled.totalRevenueContainer>
      <BarChart
        series={TotalRevenueSeries}
        height={screenSize > 420 ? 410 : 310}
        options={TotalRevenueOptions}
        width={barChartWidth()}
      />
    </styled.container>
  );
};

export default BarGraph;
