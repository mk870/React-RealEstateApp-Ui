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
export const Text = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  color: ${secondaryThemeColor};
`;
export const mapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const map = styled.img`
  width: 450px;
  height: 300px;
  @media (max-width: 1100px) {
    width: 380px;
  }
  @media (max-width: 1000px) {
    width: 480px;
    height: 330px;
  }
  @media (max-width: 550px) {
    width: 400px;
    height: 330px;
  }
  @media (max-width: 430px) {
    width: 100%;
    height: 100%;
  }
`;
