import { mainThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: black;
  color: ${whiteColor};
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;

export const wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;
  @media (max-width: 600px) {
    margin: 0px 10px 0px 10px;
  }
`;
export const row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 500px) {
    gap: 5px;
    flex-direction: column;
  }
`;
export const link = styled.p`
  font-size: 14px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    color: ${mainThemeColor};
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 370px) {
    font-size: 10px;
  }
`;
export const logoImage = styled.img`
  height: 100px;
  width: 120px;
  margin-bottom: 4px;
  @media (max-width: 430px) {
    height: 60px;
    width: 70px;
  }
  @media (max-width: 370px) {
    height: 50px;
    width: 60px;
  }
`;
export const text = styled.p`
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 7px 0;
  @media (max-width: 700px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 370px) {
    font-size: 10px;
  }
`;
export const styledText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 7px 0;
  letter-spacing: 2px;
  @media (max-width: 500px) {
    font-size: 14px;
    margin: 0;
  }
  @media (max-width: 370px) {
    font-size: 11px;
    margin: 0;
  }
`;

export const socials = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 30px;
  place-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export const social = styled.div``;
