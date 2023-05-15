import React from "react";
import * as styled from "components/InputGroup/InputGroupStyles";
import InputField from "components/InputField/InputField";

const InputGroup = ({ type, filterValues, setFilterValues }) => {
  const handleMaxPrice = (value) => {
    setFilterValues({ ...filterValues, priceMax: value });
  };
  const handleMinPrice = (value) => {
    setFilterValues({ ...filterValues, priceMin: value });
  };
  const handleMaxBedrooms = (value) => {
    setFilterValues({ ...filterValues, bedroomsMax: value });
  };
  const handleMinBedrooms = (value) => {
    setFilterValues({ ...filterValues, bedroomsMin: value });
  };
  const handleMaxBathRooms = (value) => {
    setFilterValues({ ...filterValues, maxBathRooms: value });
  };
  const handleMinBathRooms = (value) => {
    setFilterValues({ ...filterValues, minBathRooms: value });
  };
  const handleAgentName = (value) => {
    setFilterValues({ ...filterValues, agentName: value });
  }
  return (
    <styled.Container>
      {type === "agents" && (
        <InputField
          label={"agent name"}
          onChangeFunc={handleAgentName}
          inputValue={filterValues.agentName}
          isSearch={false}
          backgroundColor={"transparent"}
          handleOnKeyEnter={null}
          hasFloatingLabel={true}
          size={"small"}
        />
      )}
      <InputField
        label={"min price(USD)"}
        onChangeFunc={handleMinPrice}
        inputValue={filterValues.priceMin}
        isSearch={false}
        backgroundColor={"transparent"}
        handleOnKeyEnter={null}
        hasFloatingLabel={true}
        size={"small"}
      />
      <InputField
        label={"max price(USD)"}
        onChangeFunc={handleMaxPrice}
        inputValue={filterValues.priceMax}
        isSearch={false}
        backgroundColor={"transparent"}
        handleOnKeyEnter={null}
        hasFloatingLabel={true}
        size={"small"}
      />
      {type !== "agents" && (
        <>
          <InputField
            label={"min bathrooms"}
            onChangeFunc={handleMinBathRooms}
            inputValue={filterValues.minBathRooms}
            isSearch={false}
            backgroundColor={"transparent"}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
            size={"small"}
          />
          <InputField
            label={"max bathrooms"}
            onChangeFunc={handleMaxBathRooms}
            inputValue={filterValues.maxBathRooms}
            isSearch={false}
            backgroundColor={"transparent"}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
            size={"small"}
          />
          <InputField
            label={"min bedrooms"}
            onChangeFunc={handleMinBedrooms}
            inputValue={filterValues.bedroomsMin}
            isSearch={false}
            backgroundColor={"transparent"}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
            size={"small"}
          />
          <InputField
            label={"max bedrooms"}
            onChangeFunc={handleMaxBedrooms}
            inputValue={filterValues.bedroomsMax}
            isSearch={false}
            backgroundColor={"transparent"}
            handleOnKeyEnter={null}
            hasFloatingLabel={true}
            size={"small"}
          />
        </>
      )}
    </styled.Container>
  );
};

export default InputGroup;
