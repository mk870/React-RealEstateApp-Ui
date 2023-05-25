import { mainThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  z-index: 10;
  padding-bottom: 15px;
  gap:10px;
`;
export const selectContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap:4px;
  margin-bottom:5px;
  .select-input{
   outline: none;
   height: 30px;
   border-radius: 5px;
   font-size:14px;
   width:auto;
   &:hover{
     cursor: pointer;
   }
   @media (max-width: 600px) {
    font-size: 12px;
    width: 100%;
  }
  }
`
export const label = styled.p`
  font-size: 14px;
  margin: 0;
  align-items: center;
  color: ${mainThemeColor};
  @media (max-width: 600px) {
    font-size: 12;
  }
`;