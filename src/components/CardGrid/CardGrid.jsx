import React from "react";
import * as styled from "components/CardGrid/CardGridStyles";
import PropertyCard from "components/PropertyCard/PropertyCard";

const CardGrid = ({ contentlist, type, isFromLocalServer }) => {
  const getId = (content) => {
    if (isFromLocalServer) return content.propertyId;
    else return content.property_id;
  };
  return (
    <styled.container>
      <styled.grid>
        {Array.isArray(contentlist) ? (
          contentlist.map((content) => (
            <PropertyCard
              key={getId(content)}
              property={content}
              type={type}
              isFromLocalServer={isFromLocalServer}
            />
          ))
        ) : (
          <h1>No data</h1>
        )}
      </styled.grid>
    </styled.container>
  );
};

export default CardGrid;
