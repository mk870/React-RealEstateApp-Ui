import React from "react";
import millify from "millify";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { secondaryThemeColor } from "Css/Variables";

import * as styled from "./LineGraphStyles";
import LineChart from "Pages/Dashboard/Charts/LineChart/LineChart";
import { customersOptions, customersSeries } from "Pages/Dashboard/Charts/ChartsConfig";

const CustomerLineChart = () => {
  const getWidth = () => {
    return "100%";
  };
  return (
    <styled.container>
      <styled.header>
        <styled.title>Customers</styled.title>
        <HiOutlineDotsVertical fontSize={18} color={secondaryThemeColor} />
      </styled.header>
      <styled.section>
        <styled.text>Total Customers</styled.text>
        <styled.subHeader>
          <styled.customerNumber>{millify(1200000)}</styled.customerNumber>
          <styled.customerChange>5.47%</styled.customerChange>
        </styled.subHeader>
        <LineChart
          series={customersSeries}
          options={customersOptions}
          width={getWidth()}
        />
      </styled.section>
    </styled.container>
  );
};

export default CustomerLineChart;
