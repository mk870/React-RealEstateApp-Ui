import { mainThemeColor, secondaryThemeColor, shadow, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  position: absolute;
  top: 105%;
  right: 1%;
  width: 280px;
  min-height: 55px;
  background-color: ${whiteColor};
  z-index: 20;
  border-radius: 7px;
  box-shadow: ${shadow};
`;

export const listItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  color: ${secondaryThemeColor};
  padding: 10px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  margin-left: 10px;
  box-sizing:border-box;
`;
export const header = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin: 0;
`;
export const text = styled.p`
  font-size: 13px;
  margin: 0 ;
`;
export const NoNotificationstext = styled.p`
  font-size: 15px;
  margin: 10px 0 0 10px;
  font-weight:bold;
  text-align:center;
`;
export const markAsRead = styled.p`
  border-radius: 5px;
  background-color: ${mainThemeColor};
  color: ${whiteColor};
  font-size: 12px;
  margin:0;
  padding: 7px ;
  &:hover {
    cursor: pointer;
  }
`;
