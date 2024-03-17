import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import {
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { MdOutlineRealEstateAgent, MdOutlineSell } from "react-icons/md";

import { pieChartsData } from "Pages/Dashboard/Charts/ChartsConfig";
import PieChart from "Pages/Dashboard/Charts/PieChart/PieChart";
import * as styled from "./SummaryStyles";
import { commonInViewStyles, redColor } from "Css/Variables";
import Counter from "Pages/Dashboard/Counter/Counter";
import InViewAnimation from "HOCs/InViewAnimation";

const Summary = () => {
  const styles = (colors) => ({
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: colors[1],
    color: colors[0],
  });
  const size = 20;
  const getIcon = (colors, title) => {
    if (title === "Properties For Sale")
      return <BiBuildingHouse style={styles(colors)} size={size} />;
    else if (title === "Rental Properties")
      return <HiOutlineHomeModern style={styles(colors)} size={size} />;
    else if (title === "Properties Sold")
      return <MdOutlineSell style={styles(colors)} size={size} />;
    else return <MdOutlineRealEstateAgent style={styles(colors)} size={size} />;
  };
  return (
    <InViewAnimation styles={commonInViewStyles}>
      <styled.chartRow>
        {pieChartsData.map((data) => (
          <styled.container key={data.title}>
            <styled.IconContainer>
              {getIcon(data.color, data.title)}
            </styled.IconContainer>
            <styled.textContainer borderColor={data.color[0]}>
              <styled.title>{data.title}</styled.title>
              <styled.Row>
                <styled.number>
                  <Counter amount={data.value} speed={1} />
                </styled.number>
                <styled.Change>
                  {`${data.change}%`}{" "}
                  {data.change > 0 ? (
                    <HiOutlineArrowTrendingUp color="green" size={size} />
                  ) : (
                    <HiOutlineArrowTrendingDown color={redColor} size={size} />
                  )}
                </styled.Change>
              </styled.Row>
            </styled.textContainer>
            <PieChart
              width={"120px"}
              type={"donut"}
              enableLabels={false}
              series={data.series}
              showLegend={false}
              colors={data.color}
              labels={[]}
            />
          </styled.container>
        ))}
      </styled.chartRow>
    </InViewAnimation>
  );
};

export default Summary;
