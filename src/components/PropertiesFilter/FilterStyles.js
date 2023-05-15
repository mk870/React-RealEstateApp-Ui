import { mainThemeColor } from "Css/Variables";
import { opacityAnimation } from "components/PropertyDetails/TaxHistory/TaxHistoryStyles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width: 350px) {
    padding: 5px;
  }
`;
export const openFilters = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-bottom: 15px;
`;
export const filterController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 7px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 5px;
`;
export const header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const headerText = styled.p`
  font-size: 18px;
  color: black;
  margin: 0 10px 0 0;
  font-weight: bolder;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
export const toggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const toggleText = styled.p`
  padding: 5px;
  margin: 0;
  font-size: 14px;
  color: ${mainThemeColor};
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const filtersWrapper = styled.div`
  animation: ${opacityAnimation} 0.5s;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
  margin-top: 10px;
`;
export const filterGroups = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100%;
`;
export const filterGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
`;
export const btnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  margin-top: 15px;
`;
