import React from "react";
import { useSelector } from "react-redux";

import HeatMap from "./HeatMap/HeatMap";
import Funnel from "./Funnel/Funnel";
import InViewAnimation from "HOCs/InViewAnimation";

const SalesAnalysis = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const styles = () => {
    if (screenSize >= 1300) {
      return {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        gap: "10px",
      };
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
      };
    }
  };
  return (
    <InViewAnimation styles={styles()}>
      <HeatMap />
      <Funnel />
    </InViewAnimation>
  );
};

export default SalesAnalysis;
