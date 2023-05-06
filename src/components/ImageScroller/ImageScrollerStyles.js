import styled, { keyframes } from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftArrowContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
export const RightArrowContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const opacityAnimation = keyframes`
  0% { opacity:0;}
  100% { opacity: 1; }
`;

export const ImageContainer = styled.div`
  animation: ${opacityAnimation} 0.5s;
  overflow: hidden;
  display: ${({ isInView }) => (isInView ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  @media (max-width: 1500px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  height: 750px;
  background-color: grey;
  @media (max-width: 1700px) {
    height: 650px;
  }
  @media (max-width: 1500px) {
    height: 550px;
  }
  @media (max-width: 1150px) {
    height: 450px;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
  @media (max-width: 500px) {
    height: 250px;
  }
  @media (max-width: 400px) {
    height: 220px;
  }
`;
