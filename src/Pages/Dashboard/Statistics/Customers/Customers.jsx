import React from "react";

import * as styled from "./CustomersStyles";
import LineGraph from "./LineGraph/LineGraph";
import Origins from "./Origins/Origins";
import Type from "./Type/Type";
import Satisfaction from "./Satisfaction/Satisfaction";

const Customers = () => {
  return (
    <styled.container>
      <LineGraph />
      <styled.SubContainer>
        <styled.Row>
          <Type />
          <Satisfaction />
        </styled.Row>
        <Origins />
      </styled.SubContainer>
    </styled.container>
  );
};

export default Customers;
