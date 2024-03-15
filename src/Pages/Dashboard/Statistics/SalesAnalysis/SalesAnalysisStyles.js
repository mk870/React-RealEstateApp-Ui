import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 10px;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }
`;