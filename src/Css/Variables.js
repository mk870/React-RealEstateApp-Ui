import { keyframes } from "styled-components";

export const mainThemeColor = "rgb(71,91,232)";
export const lightMainThemeColor = "rgba(71,91,232,0.8)";
export const secondaryThemeColor = "rgb(128,129,145)";
export const whiteColor = "white";
export const backgroundColor = "rgb(228,232,239)";
export const lightBackgroundColor = "rgb(228,232,239,0.4)";
export const redColor = "#FF2700";
export const lightRed = "#F45252"
export const shadow = "0 4px 8px 0 rgba(0, 0, 0, 0.4)";

export const skeletonAnimation = keyframes`
  0% { background-color:${backgroundColor};}
  100% { background-color: #808080;}
`;
