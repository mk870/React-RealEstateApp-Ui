import { mainThemeColor, redColor, secondaryThemeColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  position: relative;
  gap: 10px;
  width: 250px;
  min-height: 250px;
  border-radius: 7px;
  box-sizing: border-box;
  cursor: pointer;
  @media (max-width: 920px) {
    width: 200px;
    min-height: 150px;
  }
  @media (max-width: 700px) {
    width: 180px;
    min-height: 130px;
  }
  @media (max-width: 420px) {
    width: 160px;
    min-height: 130px;
  }
  @media (max-width: 370px) {
    width: 200px;
    min-height: 150px;
  }
`;
export const propertyType = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 7px;
  background: ${mainThemeColor};
  border-radius: 2px;
`;
export const propertyTypeText = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: aliceblue;
  margin: 0;
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

export const poster = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 7px;
  border: 1px solid ${secondaryThemeColor};
  @media (max-width: 920px) {
    width: 200px;
    height: 150px;
  }
  @media (max-width: 700px) {
    width: 180px;
    height: 130px;
  }
  @media (max-width: 420px) {
    width: 160px;
    height: 130px;
  }
  @media (max-width: 370px) {
    width: 200px;
    height: 150px;
  }
`;
export const row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
export const row2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`;
export const amennities = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
`;
export const name = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  color: black;
  @media (max-width: 920px) {
    font-size: 13px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
export const rent = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  color: ${mainThemeColor};
  .span {
    color: ${secondaryThemeColor};
  }
  @media (max-width: 920px) {
    font-size: 13px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
export const addLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  position: absolute;
  top: 160px;
  right: 10px;
  background: black;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 920px) {
    top: 110px;
  }
  @media (max-width: 700px) {
    top: 100px;
    height: 22px;
    width: 22px;
  }
  @media (max-width: 520px) {
    height: 22px;
    width: 22px;
  }
  @media (max-width: 370px) {
    top: 110px;
  }
`;
export const deleteLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: aliceblue;
  position: absolute;
  top: 160px;
  right: 10px;
  border-radius: 3px;
  background: ${redColor};
  padding: 5px 8px;
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 920px) {
    font-size: 12px;
    top: 110px;
  }
  @media (max-width: 700px) {
    font-size: 11px;
    top: 100px;
  }
  @media (max-width: 420px) {
    font-size: 8px;
  }
  @media (max-width: 370px) {
    top: 110px;
    font-size: 11px;
  }
`;
export const locationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 5px;
  @media (max-width: 700px) {
    gap: 1px;
  }
`;
export const text = styled.p`
  margin: 0;
  color: ${secondaryThemeColor};
  font-size: 13px;
  @media (max-width: 920px) {
    font-size: 12px;
  }
  @media (max-width: 700px) {
    font-size: 11px;
  }
`;
export const amennitiesText = styled.p`
  margin: 0;
  color: ${secondaryThemeColor};
  font-size: 13px;
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
