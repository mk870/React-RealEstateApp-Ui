import React from "react";
import { useNavigate } from "react-router-dom";

import * as styled from "./FeaturedProperiesStyles";
import CardGrid from "components/CardGrid/CardGrid";
import { featuredProperties } from "./Data/PropertyList";
import InViewAnimation from "HOCs/InViewAnimation";

const FeaturedProperties = () => {
  const navigate = useNavigate();
  const pages = [
    {
      name: "For Sale",
      path: "/forsale-properties",
    },
    {
      name: "For Rent",
      path: "/rental-properties",
    },
    {
      name: "Agents",
      path: "/agents",
    },
  ];
  return (
    <InViewAnimation styles={{width:"100%"}}>
      <styled.container>
        <styled.header>
          <styled.headerText>Featured Properties</styled.headerText>
          <styled.pageLinksContainer>
            {pages.map((link, index) => (
              <styled.pageLink
                key={link.name}
                position={index}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </styled.pageLink>
            ))}
          </styled.pageLinksContainer>
        </styled.header>
        <CardGrid
          contentlist={featuredProperties}
          type={"forsale"}
          isFromLocalServer={false}
        />
      </styled.container>
    </InViewAnimation>
  );
};

export default FeaturedProperties;
