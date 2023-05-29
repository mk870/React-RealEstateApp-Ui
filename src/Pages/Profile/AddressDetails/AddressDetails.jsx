import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineNumber } from "react-icons/ai";
import { GiRoad, GiTexas } from "react-icons/gi";
import { FaCity, FaFlagUsa } from "react-icons/fa";

import * as styled from "./AddressDetailsStyles";
import { mainThemeColor } from "Css/Variables";
import EditContainer from "components/EditContainer/EditContainer";
import { nullStringValueChecker } from "Utils/utils";

const AddressDetails = ({user}) => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 26 : 20;
  const iconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
      color: mainThemeColor,
    };
  };
  const location = [
    {
      name: "Street Number",
      value: nullStringValueChecker(user?.StreetNumber),
      icon: <AiOutlineNumber size={iconSize} style={iconStyles()} />,
    },
    {
      name: "Street Name",
      value: nullStringValueChecker(user?.StreetName),
      icon: <GiRoad size={iconSize} style={iconStyles()} />,
    },
    {
      name: "City",
      value: nullStringValueChecker(user?.City),
      icon: <FaCity size={iconSize} style={iconStyles()} />,
    },
    {
      name: "State/Province",
      value: nullStringValueChecker(user?.State),
      icon: <GiTexas size={iconSize} style={iconStyles()} />,
    },
    {
      name: "Country",
      value: nullStringValueChecker(user?.Country),
      icon: <FaFlagUsa size={iconSize} style={iconStyles()} />,
    },
  ];
  return (
    <styled.container>
      <styled.row>
        <styled.header>Address Details</styled.header>
        <EditContainer type={"address details"}/>
      </styled.row>
      <styled.details>
        {location.map((item) => (
          <styled.detailItem key={item.name}>
            {item.icon}
            <styled.textContainer>
              <styled.title>{item.name}:</styled.title>
              <styled.text>{item.value}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
        ))}
      </styled.details>
    </styled.container>
  );
};

export default AddressDetails;
