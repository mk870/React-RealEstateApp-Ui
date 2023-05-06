import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import * as styled from "./CustomersStyles";
import { secondaryThemeColor } from "Css/Variables";
import millify from "millify";
import LineChart from "components/Charts/LineChart/LineChart";
import {
  customersOptions,
  customersSeries,
} from "components/Charts/ChartsConfig";

const Customers = () => {
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

export default Customers;
