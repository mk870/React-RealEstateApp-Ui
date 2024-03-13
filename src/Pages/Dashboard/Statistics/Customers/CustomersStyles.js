import styled from "styled-components";

export const container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  width: 100%;
  @media (max-width: 1560px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  gap: 10px;
  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
  }
`;
