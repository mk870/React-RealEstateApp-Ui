import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  gap: 10px;
  @media (max-width: 1000px) {
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
`;
