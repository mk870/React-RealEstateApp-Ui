import styled from "styled-components";

export const header = styled.p`
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
export const chartRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
`;

export const wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 30px 10px;
  @media (max-width:1320px) {
    flex-direction:column;
  }
`;

export const row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;
