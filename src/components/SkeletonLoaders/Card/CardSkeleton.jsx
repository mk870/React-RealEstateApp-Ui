import React from "react";
import * as styled from "components/SkeletonLoaders/Card/CardSkeletonStyles";

const CardSkeleton = () => {
  return (
    <styled.container>
      <styled.poster />
      <styled.textLoader />
      <styled.textLoader />
      <styled.textLoader />
    </styled.container>
  );
};

export default CardSkeleton;
