import React from "react";
import ReactApexChart from "react-apexcharts";

import * as styled from "./PieChartStyles";
import Counter from "Pages/Dashboard/Counter/Counter";
import { MdOutlineRealEstateAgent, MdOutlineSell } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import {
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { redColor } from "Css/Variables";

const PieChart = ({ title, series, value, colors, change }) => {
  const styles = {
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: colors[1],
    color: colors[0],
  };
  const size = 20;
  const getIcon = () => {
    if (title === "Properties For Sale")
      return <BiBuildingHouse style={styles} size={size} />;
    else if (title === "Rental Properties")
      return <HiOutlineHomeModern style={styles} size={size} />;
    else if (title === "Properties Sold")
      return <MdOutlineSell style={styles} size={size} />;
    else return <MdOutlineRealEstateAgent style={styles} size={size} />;
  };
  return (
    <styled.container>
      <styled.IconContainer>{getIcon()}</styled.IconContainer>
      <styled.textContainer borderColor={colors[0]}>
        <styled.title>{title}</styled.title>
        <styled.Row>
          <styled.number>
            <Counter amount={value} speed={1} />
          </styled.number>
          <styled.Change>
            {`${change}%`}{" "}
            {change > 0 ? (
              <HiOutlineArrowTrendingUp color="green" size={size} />
            ) : (
              <HiOutlineArrowTrendingDown color={redColor} size={size}/>
            )}
          </styled.Change>
        </styled.Row>
      </styled.textContainer>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </styled.container>
  );
};

export default PieChart;
