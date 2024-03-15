import React from "react";

import * as styled from "./CustomersStyles";
import LineGraph from "./LineGraph/LineGraph";
import Origins from "./Origins/Origins";
import Satisfaction from "./Satisfaction/Satisfaction";
import Segments from "./Segments/Segments";

const Customers = () => {
  return (
    <styled.container>
      <LineGraph />
      <styled.SubContainer>
        <styled.Row>
          <Segments />
          <Satisfaction />
        </styled.Row>
        <Origins />
      </styled.SubContainer>
    </styled.container>
  );
};

export default Customers;
