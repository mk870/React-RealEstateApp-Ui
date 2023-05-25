import React from "react";
import * as styled from "./PersonalDetailsStyles";
import { useSelector } from "react-redux";
import EditContainer from "components/EditContainer/EditContainer";
import { AiFillPhone } from "react-icons/ai";
import { mainThemeColor } from "Css/Variables";
import { BsFillCalendar2DateFill, BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdRecordVoiceOver } from "react-icons/md";
import { nullStringValueChecker } from "Utils/utils";

const PersonalDetails = () => {
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
              <styled.text>{nullStringValueChecker(user.firstName)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <BsFillPersonFill size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Last Name:</styled.title>
              <styled.text>{nullStringValueChecker(user.lastName)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <BsFillCalendar2DateFill size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Date Of Birth:</styled.title>
              <styled.text>{nullStringValueChecker(user.dateOfBirth)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <MdEmail size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Email Address:</styled.title>
              <styled.text>{nullStringValueChecker(user.emailAddress)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <AiFillPhone size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Phone:</styled.title>
              <styled.text>{nullStringValueChecker(user.phone)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
          <styled.detailItem>
            <MdRecordVoiceOver size={iconSize} style={iconStyles()} />
            <styled.textContainer>
              <styled.title>Bio:</styled.title>
              <styled.text>{nullStringValueChecker(user.bio)}</styled.text>
            </styled.textContainer>
          </styled.detailItem>
        </styled.details>
    </styled.container>
  );
};

export default PersonalDetails;
