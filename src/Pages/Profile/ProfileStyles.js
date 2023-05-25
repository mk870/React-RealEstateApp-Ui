import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 15px;
`;
export const header = styled.p`
  margin: 0;
  font-size: 18px;
  color: black;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const overview = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  gap: 15px;
`;
export const profilePhoto = styled.img`
  height: 250px;
  width: 220px;
  border-radius: 10px;
  @media (max-width: 340px) {
   height: 220px;
  width: 200px;
 }
`;
export const editContainer = styled.div`
display: flex;
`
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 60px;
  width: 100%;
  @media (max-width: 700px) {
    justify-content: space-between;
    gap: 3px;
  }
`;
export const link = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ active }) => (active ? "black" : secondaryThemeColor)};
  margin: 0;
  cursor: pointer;
  border-bottom: ${({ active }) =>
    active ? `2px solid ${mainThemeColor}` : "none"};
  @media (max-width: 600px) {
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;
