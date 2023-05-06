import React from "react";
import * as styled from "components/SkeletonLoaders/Grid/GridSkeletonStyles";
import CardSkeleton from "../Card/CardSkeleton";

const GridSkeleton = () => {
  const dummylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <styled.container>
      <styled.grid>
        {dummylist.map((item) => (
          <CardSkeleton key={item} />
        ))}
      </styled.grid>
    </styled.container>
  );
};

export default GridSkeleton;
