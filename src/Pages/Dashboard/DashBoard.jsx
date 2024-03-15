import React from "react";

import * as styled from "./DashboardStyles";
import Customers from "./Statistics/Customers/Customers";
import Summary from "./Statistics/Summary/Summary";
import Revenue from "./Statistics/Revenue/Revenue";
import Sales from "./Statistics/Sales/Sales";
import Agents from "./Statistics/Agents/Agents";
import SalesAnalysis from "./Statistics/SalesAnalysis/SalesAnalysis";

const DashBoard = () => {
  return (
    <styled.Container>
      <styled.PageInnerContainer>
        <styled.header>Dashboard</styled.header>
        <Summary />
        <Revenue />
        <Customers />
        <Sales />
        <SalesAnalysis/>
        <Agents />
      </styled.PageInnerContainer>
    </styled.Container>
  );
};

export default DashBoard;
