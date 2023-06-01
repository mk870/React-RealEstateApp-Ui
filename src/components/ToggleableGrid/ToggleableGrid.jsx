import React from "react";

import * as styled from "./ToggleableStyles";
import CardGrid from "components/CardGrid/CardGrid";

const ToggleableGrid = ({ contentList, type, header }) => {
  return (
    <styled.containter>
      <styled.row>
        <styled.title>{header}</styled.title>
      </styled.row>
      <CardGrid
        contentlist={contentList}
        type={type}
        isFromLocalServer={false}
      />
    </styled.containter>
  );
};

export default ToggleableGrid;
