import React from "react";
import { useNavigate } from "react-router-dom";

import * as styled from "Layout/Footer/FooterStyles";
import logo from "Assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const links = [
    {
      name: "Properties For Sale",
      path: "/properties-forsale",
    },
    {
      name: "Properties For Rent",
      path: "/rental-properties",
    },
    {
      name: "Real Estate Agents",
      path: "/agents",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];
  return (
    <styled.container>
      <styled.wrapper>
        <styled.logoImage src={logo} alt="logo" />
        <styled.styledText>R-Estates</styled.styledText>
      </styled.wrapper>
      <styled.row>
        {links.map((link) => (
          <styled.link key={link.name} onClick={() => navigate(link.path)}>
            {link.name}
          </styled.link>
        ))}
      </styled.row>
      <styled.wrapper>
        <styled.text>restates49@gmail.com</styled.text>
        <styled.text>
          Copyright &copy;<span> {year}</span>
        </styled.text>
      </styled.wrapper>
    </styled.container>
  );
};

export default Footer;
