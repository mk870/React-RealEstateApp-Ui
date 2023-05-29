import React from "react";
import * as styled from "components/CardGrid/CardGridStyles";
import PropertyCard from "components/PropertyCard/PropertyCard";
import AgentCard from "components/AgentCard/AgentCard";

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
      <styled.grid>
        {Array.isArray(contentlist) ? (
          contentlist.map((content) =>
            type === "agent" ? (
              <AgentCard
                key={getId(content)}
                isFromLocalServer={isFromLocalServer}
                agent={content}
              />
            ) : (
              <PropertyCard
                key={getId(content)}
                property={content}
                type={type}
                isFromLocalServer={isFromLocalServer}
              />
            )
          )
        ) : (
          <h1>No data</h1>
        )}
      </styled.grid>
    </styled.container>
  );
};

export default CardGrid;
