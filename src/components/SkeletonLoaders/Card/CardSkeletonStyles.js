import { skeletonAnimation } from "Css/Variables";
import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  min-height: 150px;
  border-radius: 7px;
  @media (max-width: 920px) {
    width: 200px;
    min-height: 150px;
  }
  @media (max-width: 700px) {
    width: 180px;
    min-height: 130px;
  }
  @media (max-width: 420px) {
    width: 160px;
    min-height: 130px;
  }
  @media (max-width: 330px) {
    width: 200px;
    min-height: 150px;
  }
`;
export const poster = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 250px;
  height: 200px;
  border-radius: 7px;
  @media (max-width: 920px) {
    width: 200px;
    height: 150px;
  }
  @media (max-width: 700px) {
    width: 180px;
    height: 130px;
  }
  @media (max-width: 420px) {
    width: 160px;
    height: 130px;
  }
  @media (max-width: 330px) {
    width: 200px;
    height: 150px;
  }
`;
export const textLoader = styled.div`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  @media (max-width: 700px) {
    height: 15px;
  }
`;
