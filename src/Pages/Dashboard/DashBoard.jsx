import React from "react";
import { Page } from "../../Css/PageStyles";
import { PageInnerContainer } from "../../Css/PageStyles";
import * as styled from "./DashboardStyles";
import PieChart from "components/Charts/PieChart/PieChart";
import TotalRevenue from "components/TotalRevenue/TotalRevenue";
import ReferralsInfo from "components/Referrals/ReferralsInfo";
import TopAgents from "components/TopAgents/TopAgents";
import LatestSales from "components/LatestPropertySales/LatestSales";
import Customers from "components/CustomerStats/Customers";

const DashBoard = () => {
  const pieChartsData = [
    {
      title: "Properties For Sale",
      value: 684,
      series: [75, 25],
      color: ["#475be8", "#b2c8ec"],
    },
    {
      title: "Rental Properties",
      value: 890,
      series: [68, 32],
      color: ["#12801c", "#afe9b3"],
    },
    {
      title: "Properties Sold",
      value: 6300,
      series: [83, 17],
      color: ["#ee0e19", "#ecbcbc"],
    },
    {
      title: "Property Agents",
      value: 4571,
      series: [44, 56],
      color: ["#75139c", "#dfb0f0"],
    },
  ];
  return (
    <Page>
      <PageInnerContainer>
        <styled.header>Dashboard</styled.header>
        <styled.chartRow>
          {pieChartsData.map((data) => (
            <PieChart
              key={data.title}
              series={data.series}
              colors={data.color}
              title={data.title}
              value={data.value}
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
      </PageInnerContainer>
    </Page>
  );
};

export default DashBoard;
