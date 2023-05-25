import { mainThemeColor, secondaryThemeColor, whiteColor } from "Css/Variables";
import { opacityAnimation } from "components/PropertyDetails/TaxHistory/TaxHistoryStyles";
import styled from "styled-components";

export const container = styled.div`
  animation: ${opacityAnimation} 0.5s;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  width: 900px;
  box-sizing: border-box;
  border: 1px solid ${secondaryThemeColor};
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 1500px) {
    width: 100%;
  }
`;
export const listItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  color: ${secondaryThemeColor};
  padding: 10px;
  width: 100%;
`;
export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  margin-left: 10px;
  box-sizing:border-box;
  gap: 5px;
`;
export const header = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 600px){
    font-size: 12px;
  }
`;
export const text = styled.p`
  font-size: 14px;
  margin: 0 ;
  @media (max-width: 600px){
    font-size: 12px;
  }
`;
export const NoNotificationstext = styled.p`
  font-size: 15px;
  margin: 10px 0 0 10px;
  font-weight:bold;
  text-align:center;
  @media (max-width: 600px){
    font-size: 12px;
  }

`;
export const markAsRead = styled.p`
  border-radius: 5px;
  background-color: ${mainThemeColor};
  color: ${whiteColor};
  font-size: 13px;
  margin:0;
  padding: 7px ;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px){
    font-size: 12px;
  }
`;