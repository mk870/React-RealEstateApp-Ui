import { mainThemeColor, redColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 3px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const name = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: black;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const poster = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 1px solid ${secondaryThemeColor};
  @media (max-width: 420px) {
    width: 110px;
    height: 110px;
  }
  @media (max-width: 370px) {
    width: 90px;
    height: 90px;
  }
`;
export const addLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  border-radius: 3px;
  background: ${mainThemeColor};
  padding: 5px 8px;
  font-size: 13px;
  width: 90%;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 920px) {
    font-size: 12px;
  }
  @media (max-width: 700px) {
    font-size: 11px;
  }
  @media (max-width: 420px) {
    font-size: 8px;
  }
  @media (max-width: 370px) {
    font-size: 11px;
  }
`;
export const deleteLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  border-radius: 3px;
  background: ${redColor};
  padding: 5px 8px;
  font-size: 13px;
  width: 90%;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 920px) {
    font-size: 12px;
  }
  @media (max-width: 700px) {
    font-size: 11px;
  }
  @media (max-width: 420px) {
    font-size: 8px;
  }
  @media (max-width: 370px) {
    font-size: 11px;
  }
`;
