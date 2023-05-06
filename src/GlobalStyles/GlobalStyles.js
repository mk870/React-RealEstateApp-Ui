import { createGlobalStyle } from "styled-components";
import { backgroundColor, secondaryThemeColor } from "../Css/Variables";


export const Globalstyles = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
    color: ${secondaryThemeColor};
    background-color:${backgroundColor};
    margin:0;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding:0;
    overflow-x:hidden;
  }`