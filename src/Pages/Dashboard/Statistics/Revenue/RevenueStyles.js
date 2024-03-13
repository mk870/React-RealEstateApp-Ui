import styled from "styled-components";

export const container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: start;
  width:100%;
  gap: 10px;
  @media (max-width: 1560px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width:1100px) {
    display: flex;
    flex-direction:column;
    width:100%;
  }
`;
export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width:100%;
  gap: 10px;
`;
export const row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  width:100%;
  gap: 10px;
  @media (max-width:420px) {
    grid-template-columns: 1fr;
  }
`;

