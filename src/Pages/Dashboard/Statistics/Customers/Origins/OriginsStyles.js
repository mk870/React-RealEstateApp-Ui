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

export const Country = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
`;

export const row = styled.div`
display:flex ;
align-items: center;
justify-content: start;
gap: 5px;
`

export const Flag = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const CountryName = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${secondaryThemeColor};
`;
