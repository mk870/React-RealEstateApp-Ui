import React from "react";
import * as styled from "components/SkeletonLoaders/Grid/GridSkeletonStyles";
import CardSkeleton from "../Card/CardSkeleton";

const GridSkeleton = ({type}) => {
  const dummylist = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <styled.container>
      <styled.grid>
        {dummylist.map((item) => (
          <CardSkeleton key={item} type={type}/>
        ))}
      </styled.grid>
    </styled.container>
  );
};

export default GridSkeleton;
