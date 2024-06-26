import React from "react";
import * as styled from "components/SelectField/SelectFieldStyles";
import { statesList } from "./Data/statesCodes";
import {
  homeLotSizeForPropertiesForSale,
  maxHomeSizeForPropertiesForSale,
  minAndMaxHomeSizeForRentalproperties,
  minHomeSizeForPropertiesForSale,
  sortByForAgents,
  sortByForPropertiesForSale,
  sortByForRentalproperties,
  sortByForSoldProperties,
} from "./Data/utils";
import { FaAsterisk } from "react-icons/fa";
import { redColor } from "Css/Variables";

const SelectField = ({ label, handleSelectFunc, value, type, size , isRequired}) => {
  const selectOptions = () => {
    if (type === "location") return statesList;
    if (type === "sort for sale properties") return sortByForPropertiesForSale;
    if (type === "sort sold properties") return sortByForSoldProperties;
    if (type === "sort for rent properties") return sortByForRentalproperties;
    if (type === "min home size for sale")
      return minHomeSizeForPropertiesForSale;
    if (type === "max home size for sale")
      return maxHomeSizeForPropertiesForSale;
    if (type === "lot size") return homeLotSizeForPropertiesForSale;
    if (type === "sort for rent properties") return sortByForRentalproperties;
    if (type === "home size for rent")
      return minAndMaxHomeSizeForRentalproperties;
    if (type === "sort for agents") return sortByForAgents;
  };
  return (
    <styled.Container selectSize={size} >
      <styled.label>
        <styled.labelText>{label}</styled.labelText>
      </styled.label>
      {isRequired && (
        <FaAsterisk className="astricks" fontSize={8} color={redColor} />
      )}
      <styled.select
        name="select"
        value={value}
        onChange={(e) => handleSelectFunc(e.target.value)}
        selectSize={size}
      >
        {selectOptions().map((option) => (
          <option key={option.name} value={option.abbreviation}>
            {option.name}
          </option>
        ))}
      </styled.select>
    </styled.Container>
  );
};

export default SelectField;
