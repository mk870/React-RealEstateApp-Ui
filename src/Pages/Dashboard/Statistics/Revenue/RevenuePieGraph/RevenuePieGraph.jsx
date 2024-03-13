import React from "react";
import * as styled from "./RevenuePieGraphStyles";
import { lightRed, mainThemeColor, secondaryThemeColor } from "Css/Variables";
import PieChart from "Pages/Dashboard/Charts/PieChart/PieChart";
import { useSelector } from "react-redux";

const RevenuePieGraph = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  return (
    <styled.container>
      <styled.Title>Revenue %</styled.Title>
      <styled.SubContainer>
        <PieChart
          type={"pie"}
          width={screenSize > 370 ? "350px" : "300px"}
          enableLabels={true}
          showLegend={screenSize > 370 ? true : false}
          colors={[mainThemeColor, secondaryThemeColor, lightRed]}
          labels={["Purchases", "Rentals", "Other"]}
          series={[50, 35, 15]}
        />
      </styled.SubContainer>
    </styled.container>
  );
};

export default RevenuePieGraph;
