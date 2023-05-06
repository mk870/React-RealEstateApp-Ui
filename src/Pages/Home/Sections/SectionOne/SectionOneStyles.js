import styled from "styled-components";
import poster from "Assets/poster10.jpg";

export const section1 = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${poster});
  width: 100%;
  height: 700px;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  margin-bottom:10px;
  background-color: rgba(56, 59, 57, 0.8);
  position: relative;
  @media (max-width: 1900px) {
    height: 500px;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
`;
export const textContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const imageText = styled.p`
  font-size: 32px;
  color: aliceblue;
  font-weight: bolder;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const pointRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-top: 10px;
  @media (max-width: 760px) {
    width: 80%;
  }
  @media (max-width: 430px) {
    width: 95%;
  }
`;
export const point = styled.div`
  width: 130px;
  height: 35px;
  border: 1px solid aliceblue;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 10px;
  @media (max-width: 760px) {
    width: 110px;
    height: 25px;
  }
  @media (max-width: 600px) {
    width: 90px;
    height: 20px;
  }
  @media (max-width: 450px) {
    width: 100px;
    height: 20px;
    margin: 0 3px;
  }
`;
export const pointText = styled.p`
  margin: 0;
  font-size: 18px;
  color: aliceblue;
  @media (max-width: 760px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
