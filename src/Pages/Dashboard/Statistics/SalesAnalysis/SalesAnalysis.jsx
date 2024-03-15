import React from "react";
import * as styled from "./SalesAnalysisStyles";
import HeatMap from "./HeatMap/HeatMap";
import Funnel from "./Funnel/Funnel";

const SalesAnalysis = () => {
  return (
    <styled.Container>
      <HeatMap />
      <Funnel />
    </styled.Container>
  );
};

export default SalesAnalysis;
