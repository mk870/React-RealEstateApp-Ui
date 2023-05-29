import { mainThemeColor, secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
`;

export const listItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  color: ${secondaryThemeColor};
  padding: 5px;
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const textContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  margin-left: 10px;
  box-sizing: border-box;
  gap: ${({ type }) => (type === "dropdown" ? "2px" : "7px")};
`;
export const header = styled.p`
  font-size: ${({ type }) => (type === "dropdown" ? "12px" : "14px")};
  font-weight: bold;
  margin: 0;
`;
export const text = styled.p`
  font-size: ${({ type }) => (type === "dropdown" ? "11px" : "14px")};
  margin: 0;
`;
export const NoNotificationstext = styled.p`
  font-size: 15px;
  margin: 10px 0 0 10px;
  font-weight: bold;
  text-align: center;
`;
export const markAsRead = styled.p`
  border-radius: 5px;
  background-color: ${mainThemeColor};
  color: ${whiteColor};
  font-size: ${({ type }) => (type === "dropdown" ? "10px" : "14px")};
  margin: 0;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;
