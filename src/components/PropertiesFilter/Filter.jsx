import React, { useContext } from "react";
import { useState } from "react";

import * as styled from "components/PropertiesFilter/FilterStyles";
import SelectField from "components/SelectField/SelectField";
import InputField from "components/InputField/InputField";
import CheckBoxGroup from "components/CheckBoxGroup/CheckBoxGroup";
import SelectGroup from "components/SelectGroup/SelectGroup";
import InputGroup from "components/InputGroup/InputGroup";
import Button from "components/Button/Button";
import { AppContext } from "Context/AppContext";

const Filter = ({ header, type, setApiParams, apiParams }) => {
  const [openFilters, setOpenFilters] = useState(false);
  const [resetCheckboxes, setResetCheckboxes] = useState(false);
  const [highlightRequiredFields, setHighlightRequiredFields] = useState({
    city: false,
    stateCode: false,
  });
  const { searchLocation } = useContext(AppContext);
  const getCity = () => {
    if (filterValues.city === "") {
      if (searchLocation.city === "") {
        setHighlightRequiredFields({
          ...highlightRequiredFields,
          city: true,
        });
        return searchLocation.city;
      } else return searchLocation.city;
    } else {
      setHighlightRequiredFields({
        ...highlightRequiredFields,
        city: false,
      });
      return filterValues.city;
    }
  };
  const getstateCode = () => {
    if (filterValues.stateCode === "") {
      if (searchLocation.stateCode === "") {
        setHighlightRequiredFields({
          ...highlightRequiredFields,
          stateCode: true,
        });
        return "AL";
      } else return searchLocation.stateCode;
    } else {
      setHighlightRequiredFields({
        ...highlightRequiredFields,
        stateCode: false,
      });
      return filterValues.stateCode;
    }
  };
  const [filterValues, setFilterValues] = useState({
    stateCode: searchLocation.stateCode,
    sortProperty: "",
    sortAgents: "",
    agentName: "",
    priceMin: "",
    priceMax: "",
    bedroomsMin: "",
    bedroomsMax: "",
    minBathRooms: "",
    maxBathRooms: "",
    propertyType: null,
    minHomeSize: "",
    maxHomeSize: "",
    city: searchLocation.city,
    insideRoomsInProperty: null,
    propertyUnitFeatures: null,
    propertyOutsideFeatures: null,
    communityAmmenities: null,
    catsOk: false,
    dogsOk: false,
    minHomeLotSize: "",
    maxHomeLotSize: "",
  });

  const handleApplychanges = () => {
    if (type === "properties for sale") {
      setApiParams({
        ...apiParams,
        stateCode: getstateCode(),
        sortby: filterValues.sortProperty,
        city: getCity(),
        priceMin: filterValues.priceMin,
        priceMax: filterValues.priceMax,
        bedroomsMin: filterValues.bedroomsMin,
        bedroomsMax: filterValues.bedroomsMax,
        minBathRooms: filterValues.minBathRooms,
        maxBathRooms: filterValues.maxBathRooms,
        propertyType: filterValues.propertyType,
        minHomeSize: filterValues.minHomeSize,
        maxHomeSize: filterValues.maxHomeSize,
        insideRoomsInProperty: filterValues.insideRoomsInProperty,
        propertyOutsideFeatures: filterValues.propertyOutsideFeatures,
        communityAmmenities: filterValues.communityAmmenities,
        minHomeLotSize: filterValues.minHomeLotSize,
        maxHomeLotSize: filterValues.maxHomeLotSize,
      });
    } else if (type === "rental properties") {
      setApiParams({
        ...apiParams,
        stateCode: getstateCode(),
        city: getCity(),
        sortby: filterValues.sortProperty,
        priceMin: filterValues.priceMin,
        priceMax: filterValues.priceMax,
        bedroomsMin: filterValues.bedroomsMin,
        bedroomsMax: filterValues.bedroomsMax,
        minBathRooms: filterValues.minBathRooms,
        maxBathRooms: filterValues.maxBathRooms,
        propertyType: filterValues.propertyType,
        minHomeSize: filterValues.minHomeSize,
        maxHomeSize: filterValues.maxHomeSize,
        dogsOk: filterValues.dogsOk,
        catsOk: filterValues.catsOk,
        inUnitFeatures: filterValues.propertyUnitFeatures,
        communityAmmenities: filterValues.communityAmmenities,
      });
    } else if (type === "agents") {
      setApiParams({
        ...apiParams,
        stateCode: filterValues.stateCode,
        city: filterValues.city,
        agentName: filterValues.agentName,
        sortby: filterValues.sortAgents,
        priceMax: filterValues.priceMax,
        priceMin: filterValues.priceMin,
      });
    } else {
      setApiParams({
        ...apiParams,
        stateCode: getstateCode(),
        sortby: filterValues.sortProperty,
        city: getCity(),
        priceMin: filterValues.priceMin,
        priceMax: filterValues.priceMax,
        bedroomsMin: filterValues.bedroomsMin,
        bedroomsMax: filterValues.bedroomsMax,
        minBathRooms: filterValues.minBathRooms,
        maxBathRooms: filterValues.maxBathRooms,
        propertyType: filterValues.propertyType,
        minHomeSize: filterValues.minHomeSize,
        maxHomeSize: filterValues.maxHomeSize,
        minHomeLotSize: filterValues.minHomeLotSize,
        maxHomeLotSize: filterValues.maxHomeLotSize,
      })
    }
  };
  const handleClearAll = () => {
    setFilterValues({
      stateCode: "",
      sortProperty: "",
      sortAgents: "",
      priceMin: "",
      priceMax: "",
      bedroomsMin: "",
      bedroomsMax: "",
      minBathRooms: "",
      maxBathRooms: "",
      propertyType: null,
      minHomeSize: "",
      maxHomeSize: "",
      city: "",
      agentName: "",
      insideRoomsInProperty: null,
      propertyUnitFeatures: null,
      propertyOutsideFeatures: null,
      communityAmmenities: null,
      catsOk: false,
      dogsOk: false,
      minHomeLotSize: "",
      maxHomeLotSize: "",
    });
    setResetCheckboxes(!resetCheckboxes);
  };
  const handleSelectStateCodeFunc = (value) => {
    setFilterValues({ ...filterValues, stateCode: value });
  };
  const handleCityFunc = (value) => {
    setFilterValues({ ...filterValues, city: value });
  };

  return (
    <styled.Container>
      <styled.filterController>
        <styled.header>
          <styled.headerText>{header}</styled.headerText>
        </styled.header>
        <styled.toggler>
          {openFilters ? (
            <styled.toggleText onClick={() => setOpenFilters(!openFilters)}>
              less filters
            </styled.toggleText>
          ) : (
            <styled.toggleText onClick={() => setOpenFilters(!openFilters)}>
              more filters
            </styled.toggleText>
          )}
        </styled.toggler>
      </styled.filterController>
      <styled.openFilters>
        <InputField
          label={"city name"}
          onChangeFunc={handleCityFunc}
          inputValue={filterValues.city}
          isSearch={true}
          handleOnKeyEnter={null}
          hasFloatingLabel={false}
          backgroundColor={"transparent"}
          size={"medium"}
          isRequired={type === "agents" ? false : true}
        />
        <SelectField
          label={"State Code"}
          type={"location"}
          value={filterValues.stateCode}
          handleSelectFunc={handleSelectStateCodeFunc}
          size={"large"}
          isRequired={type === "agents" ? false : true}
        />
        {openFilters && (
          <styled.filtersWrapper>
            <InputGroup
              filterValues={filterValues}
              setFilterValues={setFilterValues}
              type={type}
            />
            <SelectGroup
              type={type}
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />
            <CheckBoxGroup
              type={type}
              filterValues={filterValues}
              setFilterValues={setFilterValues}
              resetCheckboxes={resetCheckboxes}
              setResetCheckboxes={setResetCheckboxes}
            />
          </styled.filtersWrapper>
        )}
        <styled.btnGroup>
          <Button
            buttonText={"Apply Changes"}
            onClickFunc={handleApplychanges}
            size={"small"}
            color={"normal"}
            type={"click"}
          />
          <Button
            buttonText={"Clear All"}
            onClickFunc={handleClearAll}
            size={"small"}
            color={"danger"}
            type={"click"}
          />
        </styled.btnGroup>
      </styled.openFilters>
    </styled.Container>
  );
};

export default Filter;
