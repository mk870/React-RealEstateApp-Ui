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
//property for sale rental property agents

const Filter = ({ header, type, setApiParams, apiParams }) => {
  const [openFilters, setOpenFilters] = useState(true);
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
        return searchLocation.stateCode;
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
        stateCode:getstateCode(),
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
        communityAmmenities: filterValues.communityAmmenities
      });
    } else if (type === "agents") {
      setApiParams(filterValues);
    } else {
      console.log("error");
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
              hide
            </styled.toggleText>
          ) : (
            <styled.toggleText onClick={() => setOpenFilters(!openFilters)}>
              show
            </styled.toggleText>
          )}
        </styled.toggler>
      </styled.filterController>
      {openFilters && (
        <styled.filtersWrapper>
          <InputField
            label={"city name"}
            onChangeFunc={handleCityFunc}
            inputValue={filterValues.city}
            isSearch={true}
            handleOnKeyEnter={null}
            hasFloatingLabel={false}
            backgroundColor={"transparent"}
            size={"medium"}
          />
          <SelectField
            label={"State Code"}
            type={"location"}
            value={filterValues.stateCode}
            handleSelectFunc={handleSelectStateCodeFunc}
            size={"large"}
            isRequired={highlightRequiredFields.stateCode}
          />
          <InputGroup
            filterValues={filterValues}
            setFilterValues={setFilterValues}
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
        </styled.filtersWrapper>
      )}
    </styled.Container>
  );
};

export default Filter;
