import React from "react";
import * as styled from "components/SkeletonLoaders/Card/CardSkeletonStyles";

const CardSkeleton = ({type}) => {
  return (
    <>
      {type === "agents" ? (
        <styled.agentContainer>
          <styled.agentPoster />
          <styled.agentTextLoader />
          <styled.agentTextLoader2 />
        </styled.agentContainer>
      ) : (
        <styled.container>
          <styled.poster />
          <styled.textLoader />
          <styled.textLoader />
          <styled.textLoader2 />
        </styled.container>
      )}
    </>
  );
};

export default CardSkeleton;
