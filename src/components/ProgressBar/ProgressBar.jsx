import React from "react";
import * as styled from "./ProgressBarStyles";

const ProgressBar = ({ title, percentage, color }) => {
  return (
    <styled.container>
      <styled.header>
        <styled.text>{title}</styled.text>
        <styled.text>{`${percentage}%`}</styled.text>
      </styled.header>
      <styled.barContainer>
        <styled.bar barcolor={color} percentage={percentage} />
      </styled.barContainer>
    </styled.container>
  );
};

export default ProgressBar;
