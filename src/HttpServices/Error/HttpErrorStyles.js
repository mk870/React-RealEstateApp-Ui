import styled from "styled-components";
import { redColor } from "../../Css/Variables";

export const errorContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: ${(props) => (props.size === "small" ? "0px" : "20px")};
  width: 100%;
  box-sizing:border-box;
  border-radius:10px;
`;

export const text = styled.p`
  color: ${redColor};
  text-align: start;
  font-size: ${(props) => (props.size === "small" ? "13px" : "16px")};
  margin-left: 10px;
  font-weight:bold;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
