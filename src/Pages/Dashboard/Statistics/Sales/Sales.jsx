import React from "react";
import * as styled from "./SalesStyles";
import LatestSales from "./Latest/LatestSales";
import Locations from "./Locations/Locations";
import Composition from "./Composition/Composition";


const Sales = () => {
  return (
    <styled.Container>
      <Locations />
        <styled.Column>
          <LatestSales />
          <Composition />
        </styled.Column>
    </styled.Container>
  );
};

export default Sales;
