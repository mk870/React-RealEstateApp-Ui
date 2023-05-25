import React from "react";
import * as styled from "./AddressDetailsStyles";
import { useSelector } from "react-redux";
import { mainThemeColor } from "Css/Variables";
import { AiOutlineNumber } from "react-icons/ai";
import { GiRoad, GiTexas } from "react-icons/gi";
import { FaCity, FaFlagUsa } from "react-icons/fa";
import EditContainer from "components/EditContainer/EditContainer";
import { nullStringValueChecker } from "Utils/utils";

const AddressDetails = () => {
  const user = useSelector((state) => state.user.value);
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
      value: nullStringValueChecker(user.streetNumber),
      icon: <AiOutlineNumber size={iconSize} style={iconStyles()} />,
    },
    {
      name: "Street Name",
      value: nullStringValueChecker(user.streetName),
      icon: <GiRoad size={iconSize} style={iconStyles()} />,
    },
    {
      name: "City",
      value: nullStringValueChecker(user.city),
      icon: <FaCity size={iconSize} style={iconStyles()} />,
    },
    {
      name: "State/Province",
      value: nullStringValueChecker(user.state),
      icon: <GiTexas size={iconSize} style={iconStyles()} />,
    },
    {
      name: "Country",
      value: nullStringValueChecker(user.country),
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
