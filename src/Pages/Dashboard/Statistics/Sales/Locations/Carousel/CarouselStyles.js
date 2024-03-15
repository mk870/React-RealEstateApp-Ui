import { mainThemeColor } from "Css/Variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`;
export const slidercontent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  .slide {
    display: none;
  }
  .current {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
`;