import React from "react";
import * as styled from "./OriginsStyles";
import USflag from "Assets/flag6.png";
import CanadianFlag from "Assets/flag2.png";
import MexicanFlag from "Assets/flag3.jpg";
import ChineseFlag from "Assets/flag4.jpg";
import IndianFlag from "Assets/flag5.jpg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { redColor } from "Css/Variables";

const Origins = () => {
  const countries = [
    {
      name: "USA",
      percentage: 53,
      change: 5,
      number: 1,
      amount: "$17.49M",
      image: USflag,
    },
    {
      name: "Canada",
      percentage: 17,
      change: 5,
      number: 2,
      amount: "$5.61M",
      image: CanadianFlag,
    },
    {
      name: "Mexico",
      percentage: 12,
      change: 9,
      number: 3,
      amount: "$3.96M",
      image: MexicanFlag,
    },
    {
      name: "China",
      percentage: 9,
      change: 13,
      number: 4,
      amount: "$2.97M",
      image: ChineseFlag,
    },
    {
      name: "India",
      percentage: 6,
      change: -3,
      number: 5,
      amount: "$1.98M",
      image: IndianFlag,
    },
  ];
  return (
    <styled.container>
      <styled.title>Customer Origins</styled.title>
      <styled.Text>Top 5 Countries</styled.Text>
      {countries.map((country) => (
        <styled.Country key={country.number}>
          <styled.row>
            <styled.CountryName>{country.number}.</styled.CountryName>
            <styled.Flag src={country.image} alt="flag" />
          </styled.row>
          <styled.CountryName>{country.name}</styled.CountryName>
          <styled.Text>{country.amount}</styled.Text>
          <styled.Text>{country.percentage}%</styled.Text>
          {country.change > 0 ? (
            <FaArrowUp size={15} color="green" />
          ) : (
            <FaArrowDown size={15} color={redColor} />
          )}
        </styled.Country>
      ))}
    </styled.container>
  );
};

export default Origins;
