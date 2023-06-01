import { secondaryThemeColor} from "Css/Variables";
import { opacityAnimation } from "components/PropertyDetails/TaxHistory/TaxHistoryStyles";
import styled from "styled-components";

export const container = styled.div`
  animation: ${opacityAnimation} 0.5s;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 5px;
  width: 900px;
  box-sizing: border-box;
  border: 1px solid ${secondaryThemeColor};
  border-radius: 10px;
  padding: 10px;
  overflow-y:scroll;
  max-height: 450px;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius:100%;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: "inset 0 0 0.37rem rgba(0,0,0,0.00)";
    -webkit-appearance:none;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-appearance: none;
    background-color: rgba(0,0,0,0.3);
  }
  @media (max-width: 1500px) {
    width: 100%;
  }
`;