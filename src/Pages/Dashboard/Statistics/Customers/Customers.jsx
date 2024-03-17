import React from "react";

import * as styled from "./CustomersStyles";
import LineGraph from "./LineGraph/LineGraph";
import Origins from "./Origins/Origins";
import Satisfaction from "./Satisfaction/Satisfaction";
import Segments from "./Segments/Segments";
import InViewAnimation from "HOCs/InViewAnimation";
import { useSelector } from "react-redux";

const Customers = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const styles = () => {
    if (screenSize >= 1560) {
      return {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        width: "100%",
        gap: "10px",
      };
    } else if (screenSize >= 1150) {
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
      <LineGraph />
      <styled.SubContainer>
        <styled.Row>
          <Segments />
          <Satisfaction />
        </styled.Row>
        <Origins />
      </styled.SubContainer>
    </InViewAnimation>
  );
};

export default Customers;
