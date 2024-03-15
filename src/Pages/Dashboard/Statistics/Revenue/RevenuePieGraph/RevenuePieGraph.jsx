import React from "react";
import * as styled from "./RevenuePieGraphStyles";
import { lightRed, mainThemeColor, secondaryThemeColor } from "Css/Variables";
import PieChart from "Pages/Dashboard/Charts/PieChart/PieChart";

const RevenuePieGraph = () => {
  const showLegend = ()=>{
    if (window.matchMedia("(max-width: 370px)").matches) {
      return false
    } else {
      return true
    }
  }
  const size = ()=>{
    if (window.matchMedia("(max-width: 370px)").matches) {
      return "300px"
    } else {
      return "350px"
    }
  }
  return (
    <styled.container>
      <styled.Title>Revenue %</styled.Title>
      <styled.SubContainer>
        <PieChart
          type={"pie"}
          width={size()}
          enableLabels={true}
          showLegend={showLegend()}
          colors={[mainThemeColor, secondaryThemeColor, "#ee0e19"]}
          labels={["Purchases", "Rentals", "Other"]}
          series={[50, 35, 15]}
        />
      </styled.SubContainer>
    </styled.container>
  );
};

export default RevenuePieGraph;
