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
  @media (max-width: 1500px) {
    width: 100%;
  }
`;