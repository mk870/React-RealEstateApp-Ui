import React from "react";
import * as styled from "./ProgressBarStyles";
import Counter from "Pages/Dashboard/Counter/Counter";

const ProgressBar = ({ title, percentage, color }) => {
  return (
    <styled.container>
      <styled.header>
        <styled.text>{title}</styled.text>
        <styled.text><Counter amount={percentage} speed={3}/>%</styled.text>
      </styled.header>
      <styled.barContainer>
        <styled.bar barcolor={color} percentage={percentage} />
      </styled.barContainer>
    </styled.container>
  );
};

export default ProgressBar;
