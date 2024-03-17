import React from "react";
import { useSelector } from "react-redux";

import * as styled from "./SalesStyles";
import LatestSales from "./Latest/LatestSales";
import Locations from "./Locations/Locations";
import Composition from "./Composition/Composition";
import InViewAnimation from "HOCs/InViewAnimation";

const Sales = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const styles = () => {
    if (screenSize >= 1260) {
      return {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        width: "100%",
        gap: "10px",
      };
    } else if (screenSize >= 1000) {
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
        alignItems: "center",
        width: "100%",
        height: "100%",
        gap: "10px",
      };
    }
  };
  return (
    <InViewAnimation styles={styles()}>
      <Locations />
      <styled.Column>
        <LatestSales />
        <Composition />
      </styled.Column>
    </InViewAnimation>
  );
};

export default Sales;
