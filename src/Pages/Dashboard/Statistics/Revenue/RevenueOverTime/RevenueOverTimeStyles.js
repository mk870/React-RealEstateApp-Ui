import {
  backgroundColor,
  secondaryThemeColor,
  whiteColor,
} from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: ${whiteColor};
  border-radius: 7px;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width: 1320px) {
    width: 100%;
  }
`;
export const title = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  //width:100%;
  //border: 1px solid black;
  gap: 5px;
`;
export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  background-color: ${backgroundColor};
  border-radius: 10px;
`;
export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TimeText = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ isClicked }) => (isClicked ? whiteColor : "black")};
  padding: 5px 7px;
  background-color: ${({ isClicked }) => (isClicked ? secondaryThemeColor: "none")};
  border-radius: 10px;
  &:hover{
    cursor: pointer;
  }
`;

export const Header = styled.span`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;
export const Text = styled.span`
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  color: ${secondaryThemeColor};
`;
export const Amount = styled.span`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  color: ${({ color }) => color};
`;
