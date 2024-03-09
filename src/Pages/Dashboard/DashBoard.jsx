import React from "react";

import { Page } from "../../Css/PageStyles";
import { PageInnerContainer } from "../../Css/PageStyles";
import * as styled from "./DashboardStyles";
import PieChart from "./Charts/PieChart/PieChart";
import TotalRevenue from "./TotalRevenue/TotalRevenue";
import ReferralsInfo from "./Referrals/ReferralsInfo";
import Customers from "./CustomerStats/Customers";
import TopAgents from "./TopAgents/TopAgents";
import LatestSales from "./LatestPropertySales/LatestSales";
import { pieChartsData } from "./Charts/ChartsConfig";

const DashBoard = () => {
  return (
    <styled.Container>
      <styled.PageInnerContainer>
        <styled.header>Dashboard</styled.header>
        <styled.chartRow>
          {pieChartsData.map((data) => (
            <PieChart
              key={data.title}
              series={data.series}
              colors={data.color}
              title={data.title}
              value={data.value}
              change={data.change}
            />
          ))}
        </styled.chartRow>
        <styled.wrapper>
          <TotalRevenue />
          <ReferralsInfo />
        </styled.wrapper>
        <Customers/>
        <styled.row>
          <TopAgents/>
          <LatestSales/>
        </styled.row>
      </styled.PageInnerContainer>
    </styled.Container>
  );
};

export default DashBoard;
