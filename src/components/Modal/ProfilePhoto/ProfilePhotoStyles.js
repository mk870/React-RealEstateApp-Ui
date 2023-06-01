import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 15px;
  gap: 15px;
  height: 250px;
  @media (max-width: 600px) {
    padding: 20px 7px;
  }
`;

export const fileInput = styled.input`
  outline: none;
  border: none;
  cursor: pointer;
`;
