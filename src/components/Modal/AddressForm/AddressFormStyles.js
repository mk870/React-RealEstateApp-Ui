import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 15px;
  gap: 15px;
  @media (max-width: 600px) {
    padding: 20px 7px;
  }
`;