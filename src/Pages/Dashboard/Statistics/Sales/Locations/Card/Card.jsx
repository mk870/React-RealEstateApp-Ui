import React from "react";
import * as styled from "./CardStyles";
import millify from "millify";
import {
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import { mainThemeColor, redColor, whiteColor } from "Css/Variables";
import { BiBuildingHouse } from "react-icons/bi";
import { GiTexas } from "react-icons/gi";
import {
  MdChangeCircle,
  MdOutlineMapsHomeWork,
  MdOutlineSell,
} from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Counter from "Pages/Dashboard/Counter/Counter";

const Card = ({ city, prevSlide, nextSlide }) => {
  const iconSize = 20;
  const iconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
    };
  };
  return (
    <styled.container>
      <styled.cityImage src={city.image} alt="city image" />
      <AiOutlineLeft
        className="leftArrow"
        size={17}
        onClick={prevSlide}
        color={whiteColor}
      />
      <AiOutlineRight
        className="rightArrow"
        size={17}
        onClick={nextSlide}
        color={whiteColor}
      />
      <styled.details>
        <styled.row>
          <BiBuildingHouse style={iconStyles()} size={iconSize} />
          <styled.TypeText>Name:</styled.TypeText>
          <styled.Text>{city.name}</styled.Text>
        </styled.row>
        <styled.row>
          <GiTexas style={iconStyles()} size={iconSize} />
          <styled.TypeText>State:</styled.TypeText>
          <styled.Text>{city.state}</styled.Text>
        </styled.row>
        <styled.row>
          <MdChangeCircle style={iconStyles()} size={iconSize} />
          <styled.TypeText>Price Change:</styled.TypeText>
          <styled.Text>{`${city.priceChange}%`}</styled.Text>
          {city.priceChange > 0 ? (
            <HiOutlineArrowTrendingUp color="green" size={iconSize} />
          ) : (
            <HiOutlineArrowTrendingDown color={redColor} size={iconSize} />
          )}
        </styled.row>
        <styled.row>
          <MdOutlineSell style={iconStyles()} size={iconSize} />
          <styled.TypeText>Sales:</styled.TypeText>
          <styled.Text>{`$${millify(city.sales)}`}</styled.Text>
          {city.salesChange > 0 ? (
            <HiOutlineArrowTrendingUp color="green" size={iconSize} />
          ) : (
            <HiOutlineArrowTrendingDown color={redColor} size={iconSize} />
          )}
        </styled.row>
        <styled.row>
          <IoPeopleOutline style={iconStyles()} size={iconSize} />
          <styled.TypeText>Agents:</styled.TypeText>
          <styled.Text>
            <Counter amount={city.agents} speed={1} />
          </styled.Text>
          {city.agentsChange > 0 ? (
            <HiOutlineArrowTrendingUp color="green" size={iconSize} />
          ) : (
            <HiOutlineArrowTrendingDown color={redColor} size={iconSize} />
          )}
        </styled.row>
        <styled.row>
          <MdOutlineMapsHomeWork style={iconStyles()} size={iconSize} />
          <styled.TypeText>Properties Left:</styled.TypeText>
          <styled.Text>
            <Counter amount={city.prortiesAvailable} speed={1} />
          </styled.Text>
          {city.propertiesLeftChangeChange > 0 ? (
            <HiOutlineArrowTrendingUp color="green" size={iconSize} />
          ) : (
            <HiOutlineArrowTrendingDown color={redColor} size={iconSize} />
          )}
        </styled.row>
      </styled.details>
    </styled.container>
  );
};

export default Card;
