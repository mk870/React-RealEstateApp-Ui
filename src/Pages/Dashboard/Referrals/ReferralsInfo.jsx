import React from "react";
import * as styled from "./ReferralsInfoStyles";
import ProgressBar from "Pages/Dashboard/Referrals/ProgressBar/ProgressBar";
import { propertyReferralsInfo } from "../Charts/ChartsConfig";

const ReferralsInfo = () => {
  return (
    <styled.container>
      <styled.title>Referrals Information</styled.title>
      {propertyReferralsInfo.map((referral) => (
        <ProgressBar
          key={referral.title}
          title={referral.title}
          percentage={referral.percentage}
          color={referral.color}
        />
      ))}
    </styled.container>
  );
};

export default ReferralsInfo;
