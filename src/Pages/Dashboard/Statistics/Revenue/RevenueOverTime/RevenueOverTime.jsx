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
  const [changeTimePeriod, setChangeTimePeriod] = useState(false);
  const timePeriodList = ["Week", "Month", "Quarter"];
  const revenueStreams = [
    {
      name: "Properties forsale",
      Week: { amount: 2000000, change: 3.68 },
      Month: { amount: 19000000, change: -1.68 },
      Quarter: { amount: 50000000, change: -3.68 },
    },
    {
      name: "Rental Properties",
      Week: { amount: 2300000, change: -3.68 },
      Month: { amount: 14000000, change: -1.68 },
      Quarter: { amount: 37000000, change: 3.68 },
    },
    {
      name: "Other",
      Week: { amount: 200000, change: 3.68 },
      Month: { amount: 1000000, change: 1.68 },
      Quarter: { amount: 12000000, change: 3.68 },
    },
  ];
  const setNewTimePeriod = (timePeriod) => {
    setChangeTimePeriod(true);
    setTimePeriod(timePeriod);
    setTimeout(() => {
      setChangeTimePeriod(false);
    }, 500);
  };
  return (
    <styled.container>
      <styled.title>{`Revenue Last ${timePeriod}`}</styled.title>
      <styled.TimeWrapper>
        <styled.Time>
          {timePeriodList.map((period) => (
            <styled.TimeText
              key={period}
              isClicked={period === timePeriod ? true : false}
              onClick={() => setNewTimePeriod(period)}
            >
              {period}
            </styled.TimeText>
          ))}
        </styled.Time>
      </styled.TimeWrapper>
      {revenueStreams.map((data) => (
        <styled.SubContainer
          key={data.name}
          changeTimePeriod={changeTimePeriod}
        >
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
