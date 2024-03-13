import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  min-height: 85vh;
  padding-bottom: 20px;
  gap: 15px;
`;

export const PageInnerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  gap: 10px;
`;

export const header = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 30px 0px;
  @media (max-width: 1320px) {
    flex-direction: column;
  }
`;

export const row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-top: 15px;
  box-sizing: border-box;
  padding: 10px 0px;
`;
