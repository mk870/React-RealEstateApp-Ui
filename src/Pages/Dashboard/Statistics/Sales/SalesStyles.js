import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  gap: 10px;
  @media (max-width: 1260px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    height: 100%;
  }
`;
export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  gap: 10px;
`;
