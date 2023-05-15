import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";

import * as styled from "./ToggleableStyles";
import CardGrid from "components/CardGrid/CardGrid";

const ToggleableGrid = ({ contentList, type, header }) => {
  const [showMore, setShowMore] = useState(false);
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 26 : 20;
  const trimmedContentList = () => {
    if (contentList) {
      if (!showMore) {
        if (contentList.length > 8) return contentList.splice(0, 7);
        else return contentList;
      } else return contentList;
    } else {
      return null;
    }
  };
  return (
    <styled.containter>
      <styled.row>
        <styled.title>{header}</styled.title>
        <styled.toggleContainer onClick={() => setShowMore(!showMore)}>
          <styled.text>{showMore ? "show less" : "show more"}</styled.text>
          {showMore ? (
            <IoIosArrowUp size={iconSize} color="black" />
          ) : (
            <IoIosArrowDown size={iconSize} color="black" />
          )}
        </styled.toggleContainer>
      </styled.row>
      <CardGrid
        contentlist={trimmedContentList()}
        type={type}
        isFromLocalServer={false}
      />
    </styled.containter>
  );
};

export default ToggleableGrid;
