import React from "react";
import * as styled from "./SelectGroupStyles";
import SelectField from "components/SelectField/SelectField";

const SelectGroup = ({ type, filterValues, setFilterValues }) => {
  const handleSortBy = (value) => {
    setFilterValues({ ...filterValues, sortProperty: value });
  };
  const handleMinHomeSize = (value) => {
    setFilterValues({ ...filterValues, minHomeSize: value });
  };
  const handleMaxHomeSize = (value) => {
    setFilterValues({ ...filterValues, maxHomeSize: value });
  };
  const handleMaxHomeLotSize = (value) => {
    setFilterValues({ ...filterValues, maxHomeLotSize: value });
  };
  const handleMinHomeLotSize = (value) => {
    setFilterValues({ ...filterValues, minHomeLotSize: value });
  };
  const handleSortAgents = (value) => {
    setFilterValues({ ...filterValues, sortAgents: value });
  }
  return (
    <styled.Container>
      {(type === "properties for sale" || type === "properties sold") && (
        <>
          <SelectField
            label={"sort by:"}
            handleSelectFunc={handleSortBy}
            value={filterValues.sortProperty}
            type={"sort for sale properties"}
            size={"small"}
          />
          <SelectField
            label={"min home size(sqft):"}
            handleSelectFunc={handleMinHomeSize}
            value={filterValues.minHomeSize}
            type={"min home size for sale"}
            size={"medium"}
          />
          <SelectField
            label={"max home size(sqft):"}
            handleSelectFunc={handleMaxHomeSize}
            value={filterValues.maxHomeSize}
            type={"max home size for sale"}
            size={"medium"}
          />
          <SelectField
            label={"min house lot size(sqft):"}
            handleSelectFunc={handleMinHomeLotSize}
            value={filterValues.minHomeLotSize}
            type={"lot size"}
            size={"medium"}
          />
          <SelectField
            label={"max house lot size(sqft):"}
            handleSelectFunc={handleMaxHomeLotSize}
            value={filterValues.maxHomeLotSize}
            type={"lot size"}
            size={"medium"}
          />
        </>
      )}
      {type === "rental properties" && (
        <>
          <SelectField
            label={"sort by:"}
            handleSelectFunc={handleSortBy}
            value={filterValues.sortProperty}
            type={"sort for rent properties"}
            size={"small"}
          />
          <SelectField
            label={"min home size(sqft):"}
            handleSelectFunc={handleMinHomeSize}
            value={filterValues.minHomeSize}
            type={"home size for rent"}
            size={"medium"}
          />
          <SelectField
            label={"max home size(sqft):"}
            handleSelectFunc={handleMaxHomeSize}
            value={filterValues.maxHomeSize}
            type={"home size for rent"}
            size={"medium"}
          />
        </>
      )}
      {type === "agents" && (
        <>
          <SelectField
            label={"sort by:"}
            handleSelectFunc={handleSortAgents}
            value={filterValues.sortAgents}
            type={"sort for agents"}
            size={"small"}
          />
        </>
      )}
    </styled.Container>
  );
};

export default SelectGroup;
