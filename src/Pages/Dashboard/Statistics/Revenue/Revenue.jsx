import React from "react";

import * as styled from "./RevenueStyles";
import BarGraph from "./BarGraph/BarGraph";
import ReferralsInfo from "./Referrals/ReferralsInfo";
import RevenuePieGraph from "./RevenuePieGraph/RevenuePieGraph";
import RevenueOverTime from "./RevenueOverTime/RevenueOverTime";

const Revenue = () => {
  return (
    <styled.container>
      <BarGraph />
      <styled.Column>
        <RevenuePieGraph />
        <styled.row>
          <ReferralsInfo />
          <RevenueOverTime/>
        </styled.row>
      </styled.Column>
    </styled.container>
  );
};

export default Revenue;
