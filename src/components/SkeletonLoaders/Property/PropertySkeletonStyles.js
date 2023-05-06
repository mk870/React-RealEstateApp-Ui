import { skeletonAnimation } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
`;
export const wrapper = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 600px;
  border-radius: 7px;
  margin-bottom: 10px;
  @media (max-width: 1700px) {
    height: 400px;
  }
  @media (max-width: 1450px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    height: 300px;
  }
`;
export const text = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  height: 10px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const text2 = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  height: 10px;
  width: 65%;
  border-radius: 5px;
  margin-bottom: 10px;
`;
