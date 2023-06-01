import React from "react";
import * as styled from "components/CardGrid/CardGridStyles";
import Pagination from "./Pagination/Pagination";

const CardGrid = ({ contentlist, type, isFromLocalServer, header }) => {
  const getId = (content) => {
    if (type === "agent") {
      if (isFromLocalServer) return content.agent_id;
      else return content.advertiser_id;
    } else {
      if (isFromLocalServer) return content.property_id;
      else return content.property_id;
    }
  };
  return (
    <styled.container>
      {header && <styled.header>{header}</styled.header>}
      {Array.isArray(contentlist) ? (
        <Pagination
          data={contentlist}
          type={type}
          isFromLocalServer={isFromLocalServer}
          getDataIdsFunc={getId}
        />
      ) : (
        <h1>No data</h1>
      )}
    </styled.container>
  );
};

export default CardGrid;
