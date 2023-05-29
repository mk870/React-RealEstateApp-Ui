import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  gap: 10px;
`;
export const header = styled.p`
  margin: 0;
  color: black;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 550px) {
    font-size: 14px;
  }
`;
export const grid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 15px;
  box-sizing: border-box;
  width: 100%;
`;
