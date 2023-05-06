import React from "react";
import * as styled from "./OtherFeaturesStyles";
import { capitalizeFirstLetter } from "Utils/utils";

const OtherFeatures = ({ property }) => {
  const formatString = (text) => {
    let replaced;
      if (text.includes("_")) {
        replaced = text.replace("_", " ")
      }else{
        replaced = text
      }
      return capitalizeFirstLetter(replaced);
  };
  const otherFeatures = () => {
    if (property?.tags) {
      return property.tags.map((tag, index) => (
        <styled.item key={index}>{formatString(tag)}</styled.item>
      ));
    } else {
      return <styled.category>no other features</styled.category>;
    }
  };
  const features = () => {
    if (property.details) {
      return property.details.map((detail, index) => (
        <styled.itemContainer key={index}>
          <styled.category>{detail.category}</styled.category>
          <styled.grid>
            {detail.text?.map((text) => (
              <styled.item key={text}>{text}</styled.item>
            ))}
          </styled.grid>
        </styled.itemContainer>
      ));
    } else {
      return <styled.category>no other features</styled.category>;
    }
  };
  return (
    <styled.container>
      <styled.grid>{otherFeatures()}</styled.grid>
      <styled.grid>{features()}</styled.grid>
    </styled.container>
  );
};

export default OtherFeatures;
