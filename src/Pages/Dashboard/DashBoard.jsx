import React from "react";

import * as styled from "./DashboardStyles";
import Customers from "./Statistics/Customers/Customers";
import Summary from "./Statistics/Summary/Summary";
import Revenue from "./Statistics/Revenue/Revenue";
import Sales from "./Statistics/Sales/Sales";
import Agents from "./Statistics/Agents/Agents";

const DashBoard = () => {
  return (
    <styled.Container>
      <styled.PageInnerContainer>
        <styled.header>Dashboard</styled.header>
        <Summary />
        <Revenue />
        <Customers />
        {/* <Sales />
        <Agents /> */}
      </styled.PageInnerContainer>
    </styled.Container>
  );
};

export default DashBoard;
