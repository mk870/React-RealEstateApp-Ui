import React from "react";
import {
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import * as styled from "./RevenueOverTimeStyles";
import { useState } from "react";
import { redColor } from "Css/Variables";
import millify from "millify";

const RevenueOverTime = () => {
  const [timePeriod, setTimePeriod] = useState("Week");
  const timePeriodList = ["Week", "Month", "Quarter"];
  const revenueStreams = [
    {
      name: "Properties forsale",
      Week: { amount: 200000, change: 3.68 },
      Month: { amount: 700000, change: -1.68 },
      Quarter: { amount: 10200000, change: -3.68 },
    },
    {
      name: "Rental Properties",
      Week: { amount: 23000, change: -3.68 },
      Month: { amount: 13000, change: -1.68 },
      Quarter: { amount: 3200000, change: 3.68 },
    },
    {
      name: "Other",
      Week: { amount: 2000, change: 3.68 },
      Month: { amount: 7000, change: 1.68 },
      Quarter: { amount: 20000, change: 3.68 },
    },
  ];
  return (
    <styled.container>
      <styled.title>{`Revenue Last ${timePeriod}`}</styled.title>
      <styled.TimeWrapper>
        <styled.Time>
          {timePeriodList.map((period) => (
            <styled.TimeText
              key={period}
              isClicked={period === timePeriod ? true : false}
              onClick={() => setTimePeriod(period)}
            >
              {period}
            </styled.TimeText>
          ))}
        </styled.Time>
      </styled.TimeWrapper>
      {revenueStreams.map((data) => (
        <styled.SubContainer key={data.name}>
          <styled.Column>
            <styled.Header>{data.name}</styled.Header>
            <styled.Text>Total Revenue</styled.Text>
          </styled.Column>
          <styled.Column>
            {data[timePeriod].change > 0 ? (
              <HiOutlineArrowTrendingUp color="green" size={20} />
            ) : (
              <HiOutlineArrowTrendingDown color={redColor} size={20} />
            )}
            <styled.Amount>${millify(data[timePeriod].amount)}</styled.Amount>
          </styled.Column>
        </styled.SubContainer>
      ))}
    </styled.container>
  );
};

export default RevenueOverTime;
