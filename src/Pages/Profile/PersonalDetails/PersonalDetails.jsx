import React from "react";
import { useSelector } from "react-redux";
import { BsFillCalendar2DateFill, BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdRecordVoiceOver } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

import * as styled from "./PersonalDetailsStyles";
import EditContainer from "components/EditContainer/EditContainer";
import { mainThemeColor } from "Css/Variables";
import { nullStringValueChecker } from "Utils/utils";

const PersonalDetails = ({user}) => {
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
  return (
    <styled.container>
      <styled.row>
        <styled.header>Personal Details</styled.header>
        <EditContainer type={"personal details"}/>
      </styled.row>
        <styled.details>
          <styled.detailItem>
            <BsFillPersonFill size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>First Name:</styled.title>
              <styled.text>{nullStringValueChecker(user?.FirstName)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <BsFillPersonFill size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Last Name:</styled.title>
              <styled.text>{nullStringValueChecker(user?.LastName)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <BsFillCalendar2DateFill size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Date Of Birth:</styled.title>
              <styled.text>{nullStringValueChecker(user?.DateOfBirth)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <MdEmail size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Email Address:</styled.title>
              <styled.text>{nullStringValueChecker(user?.Email)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <AiFillPhone size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Phone:</styled.title>
              <styled.text>{nullStringValueChecker(user?.Phone)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <MdRecordVoiceOver size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Bio:</styled.title>
              <styled.text>{nullStringValueChecker(user?.Bio)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
        </styled.details>
    </styled.container>
  );
};

export default PersonalDetails;
