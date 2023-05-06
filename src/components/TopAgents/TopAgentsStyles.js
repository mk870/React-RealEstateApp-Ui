import { mainThemeColor, secondaryThemeColor, whiteColor } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
  min-width: 400px;
  @media (max-width: 450px) {
    min-width: 100%;
  }
`;

export const header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;
export const title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 16px;
  }
`;
export const viewAll = styled.p`
  font-size: 12px;
  font-weight: normal;
  background-color: ${mainThemeColor};
    color: ${whiteColor};
  margin: 0;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid ${secondaryThemeColor};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 415px) {
    font-size: 10px;
  }
`;
export const agentName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;
export const agentEmail = styled.p`
  font-size: 14px;
  color: ${secondaryThemeColor};
  font-weight: normal;
  margin: 0;
  @media (max-width: 415px) {
    font-size: 12px;
  }
`;

export const agentRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 2px;
  position: relative;
  .dots {
    color: ${secondaryThemeColor};
  }
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    background-color: rgba(128, 129, 145, 0.5);
    .dots {
      color: ${whiteColor};
    }
    ${agentName} {
      color: ${whiteColor};
    }
    ${agentEmail} {
      color: ${whiteColor};
    }
  }
`;
export const agentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;
export const agentImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  @media (max-width: 415px) {
    height: 40px;
    width: 40px;
  }
`;
export const agentDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
`;

