import React from "react";
import { useSelector } from "react-redux";

import * as styled from "./RevenueStyles";
import BarGraph from "./BarGraph/BarGraph";
import ReferralsInfo from "./Referrals/ReferralsInfo";
import RevenuePieGraph from "./RevenuePieGraph/RevenuePieGraph";
import RevenueOverTime from "./RevenueOverTime/RevenueOverTime";
import InViewAnimation from "HOCs/InViewAnimation";

const Revenue = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const styles = () => {
    if (screenSize >= 1560) {
      return {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        justifyContent: "start",
        width: "100%",
        gap: "10px",
      };
    } else if (screenSize >= 1100) {
      return {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "start",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
      };
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        width: "100%",
        gap: "10px",
      };
    }
  };
  return (
    <InViewAnimation styles={styles()}>
      <BarGraph />
      <styled.Column>
        <RevenuePieGraph />
        <styled.row>
          <ReferralsInfo />
          <RevenueOverTime />
        </styled.row>
      </styled.Column>
    </InViewAnimation>
  );
};

export default Revenue;
