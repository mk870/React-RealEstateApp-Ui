import { secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  background-color: ${whiteColor};
  border-radius: 7px;
  box-sizing: border-box;
  padding: 15px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const Categories = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  gap: 5px;
  padding: 0px 0px 0px 15px;
`;
export const Bars = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`;
export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 40px;
  height: 35px;
  box-sizing: border-box;
  background-color: ${({ color }) => color};
  color: ${whiteColor};
  font-size: 13px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-top: -8px;
`;
export const ListItem = styled.li`
  font-size: 13px;
  color: ${({ color }) => color};
  font-weight: bold;
  margin:0px;
`;

export const Text = styled.span`
  font-size: 13px;
  color: ${secondaryThemeColor};
`;
