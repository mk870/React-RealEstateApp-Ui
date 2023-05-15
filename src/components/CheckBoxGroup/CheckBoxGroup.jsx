import React, { useState, useEffect } from "react";
import * as styled from "components/CheckBoxGroup/CheckBoxGroupStyles";
import {
  forSalePropertyCommunityAmmenities,
  forSalePropertyInsideRooms,
  forSalePropertyOutsideFeatures,
  forSalePropertyTypes,
  rentalPropertyCommunityAmmenities,
  rentalPropertyInUnitFeatures,
  rentalPropertyPets,
  rentalPropertyTypes,
} from "./Data/utils";
import CheckBox from "components/CheckboxField/CheckBox";

const CheckBoxGroup = ({
  type,
  filterValues,
  setFilterValues,
  resetCheckboxes,
  setResetCheckboxes,
}) => {
  const [forSalePropertyTypesList, setForSalePropertyTypesList] =
    useState(forSalePropertyTypes);
  const [rentalPropertyTypesList, setRentalPropertyTypesList] =
    useState(rentalPropertyTypes);
  const [
    rentalPropertyInUnitFeaturesList,
    setRentalPropertyInUnitFeaturesList,
  ] = useState(rentalPropertyInUnitFeatures);
  const [forSalePropertyInsideRoomsList, setForSalePropertyInsideRoomsList] =
    useState(forSalePropertyInsideRooms);
  const [
    forSalePropertyOutSideFeaturesList,
    setForSalePropertyOutSideFeaturesList,
  ] = useState(forSalePropertyOutsideFeatures);
  const [
    forSalePropertyCommunityAmmenitiesList,
    setForSalePropertyCommunityAmmenitiesList,
  ] = useState(forSalePropertyCommunityAmmenities);
  const [rentalPropertyPetsList, setRentalPropertyPetsList] =
    useState(rentalPropertyPets);
  const [
    rentalPropertyCommunityAmmenitiesList,
    setRentalPropertyCommunityAmmenitiesList,
  ] = useState(rentalPropertyCommunityAmmenities);
  const addValueToState = (value, state) => {
    if (state) {
      let list = state.split(",");
      list.push(value);
      return list.join();
    } else {
      return value;
    }
  };
  const removeValueFromState = (value, state) => {
    let list = state.split(",");
    let newList = list.filter((item) => item !== value);
    if (newList.length === 0) {
      return null;
    } else return newList.join();
  };
  const handleForSalePropertyTypes = (index) => {
    setForSalePropertyTypesList(
      forSalePropertyTypesList.map((propertyType, currentIndex) => {
        if (currentIndex === index) {
          if (propertyType.checked) {
            setFilterValues({
              ...filterValues,
              propertyType: removeValueFromState(
                propertyType.value,
                filterValues.propertyType
              ),
            });
          } else {
            setFilterValues({
              ...filterValues,
              propertyType: addValueToState(
                propertyType.value,
                filterValues.propertyType
              ),
            });
          }
          return { ...propertyType, checked: !propertyType.checked };
        } else return propertyType;
      })
    );
  };
  const handleRentalPropertyTypes = (index) => {
    setRentalPropertyTypesList(
      rentalPropertyTypesList.map((propertyType, currentIndex) => {
        if (currentIndex === index) {
          if (propertyType.checked) {
            setFilterValues({
              ...filterValues,
              propertyType: removeValueFromState(
                propertyType.value,
                filterValues.propertyType
              ),
            });
          } else {
            setFilterValues({
              ...filterValues,
              propertyType: addValueToState(
                propertyType.value,
                filterValues.propertyType
              ),
            });
          }
          return { ...propertyType, checked: !propertyType.checked };
        } else return propertyType;
      })
    );
  };
  const handleForSalePropertyOutSideFeatures = (index) => {
    setForSalePropertyOutSideFeaturesList(
      forSalePropertyOutSideFeaturesList.map((feature, currentIndex) => {
        if (currentIndex === index) {
          if (feature.checked) {
            setFilterValues({
              ...filterValues,
              propertyOutsideFeatures: removeValueFromState(
                feature.value,
                filterValues.propertyOutsideFeatures
              ),
            });
          } else {
            setFilterValues({
              ...filterValues,
              propertyOutsideFeatures: addValueToState(
                feature.value,
                filterValues.propertyOutsideFeatures
              ),
            });
          }
          return { ...feature, checked: !feature.checked };
        } else return feature;
      })
    );
  };
  const handleRentalPropertyInUnitFeatures = (index) => {
    setRentalPropertyInUnitFeaturesList(
      rentalPropertyInUnitFeaturesList.map((feature, currentIndex) => {
        if (currentIndex === index) {
          if (feature.checked) {
            setFilterValues({
              ...filterValues,
              propertyUnitFeatures: removeValueFromState(
                feature.value,
                filterValues.propertyUnitFeatures
              ),
            });
          } else {
            setFilterValues({
              ...filterValues,
              propertyUnitFeatures: addValueToState(
                feature.value,
                filterValues.propertyUnitFeatures
              ),
            });
          }
          return { ...feature, checked: !feature.checked };
        } else return feature;
      })
    );
  };
  const handleForSalePropertyInsideRooms = (index) => {
    setForSalePropertyInsideRoomsList(
      forSalePropertyInsideRoomsList.map((insideRoom, currentIndex) => {
        if (currentIndex === index) {
          if (insideRoom.checked) {
            setFilterValues({
              ...filterValues,
              insideRoomsInProperty: removeValueFromState(
                insideRoom.value,
                filterValues.insideRoomsInProperty
              ),
            });
          } else {
            setFilterValues({
              ...filterValues,
              insideRoomsInProperty: addValueToState(
                insideRoom.value,
                filterValues.insideRoomsInProperty
              ),
            });
          }
          return { ...insideRoom, checked: !insideRoom.checked };
        } else return insideRoom;
      })
    );
  };
  const handleForSalePropertyCommunityAmmenities = (index) => {
    setForSalePropertyCommunityAmmenitiesList(
      forSalePropertyCommunityAmmenitiesList.map((ammenity, currentIndex) => {
        if (currentIndex === index) {
          if (ammenity.checked) {
            setFilterValues({
              ...filterValues,
              communityAmmenities: removeValueFromState(
                ammenity.value,
                filterValues.communityAmmenities
              ),
            });
          } else {
            setFilterValues({
              ...filterValues,
              communityAmmenities: addValueToState(
                ammenity.value,
                filterValues.communityAmmenities
              ),
            });
          }
          return { ...ammenity, checked: !ammenity.checked };
        } else return ammenity;
      })
    );
  };
  const handleRentalPropertyCommunityAmmenities = (index) => {
    setRentalPropertyCommunityAmmenitiesList(
      rentalPropertyCommunityAmmenitiesList.map((ammenity, currentIndex) => {
        if (currentIndex === index) {
          if (ammenity.checked) {
            setFilterValues({
              ...filterValues,
              communityAmmenities: removeValueFromState(
                ammenity.value,
                filterValues.communityAmmenities
              ),
            });
          } else {
            setFilterValues({
              ...filterValues,
              communityAmmenities: addValueToState(
                ammenity.value,
                filterValues.communityAmmenities
              ),
            });
          }
          return { ...ammenity, checked: !ammenity.checked };
        } else return ammenity;
      })
    );
  };
  const handleRentalPropertyPets = (index) => {
    setRentalPropertyPetsList(
      rentalPropertyPetsList.map((pet, currentIndex) => {
        if (currentIndex === index) {
          if (pet.name === "cats_ok") {
            if (pet.checked) {
              setFilterValues({ ...filterValues, catsOk: false });
            } else {
              setFilterValues({ ...filterValues, catsOk: true });
            }
          } else {
            if (pet.checked) {
              setFilterValues({ ...filterValues, dogsOk: false });
            } else {
              setFilterValues({ ...filterValues, dogsOk: true });
            }
          }
          return { ...pet, checked: !pet.checked };
        } else {
          return pet;
        }
      })
    );
  };
  useEffect(() => {
    if (resetCheckboxes) {
      setForSalePropertyTypesList(forSalePropertyTypes);
      setForSalePropertyInsideRoomsList(forSalePropertyInsideRooms);
      setForSalePropertyOutSideFeaturesList(forSalePropertyOutsideFeatures);
      setForSalePropertyCommunityAmmenitiesList(
        forSalePropertyCommunityAmmenities
      );
      setRentalPropertyInUnitFeaturesList(rentalPropertyInUnitFeatures);
      setRentalPropertyCommunityAmmenitiesList(
        rentalPropertyCommunityAmmenities
      );
      setRentalPropertyPetsList(rentalPropertyPets);
      setRentalPropertyTypesList(rentalPropertyTypes);
      setResetCheckboxes(false);
    }
  }, [resetCheckboxes, setResetCheckboxes]);
  return (
    <styled.Container>
      {type === "properties sold" && <styled.checkBoxContainer>
            <styled.header>Property Types</styled.header>
            <styled.group>
              {forSalePropertyTypesList.map((propertyType, index) => (
                <CheckBox
                  key={propertyType.name}
                  checkHandler={() => handleForSalePropertyTypes(index)}
                  isChecked={propertyType.checked}
                  index={index}
                  label={propertyType.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>}
      {(type === "properties for sale") && (
        <>
          <styled.checkBoxContainer>
            <styled.header>Property Types</styled.header>
            <styled.group>
              {forSalePropertyTypesList.map((propertyType, index) => (
                <CheckBox
                  key={propertyType.name}
                  checkHandler={() => handleForSalePropertyTypes(index)}
                  isChecked={propertyType.checked}
                  index={index}
                  label={propertyType.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>
          <styled.checkBoxContainer>
            <styled.header>Inside Rooms</styled.header>
            <styled.group>
              {forSalePropertyInsideRoomsList.map((insideRoom, index) => (
                <CheckBox
                  key={insideRoom.name}
                  checkHandler={() => handleForSalePropertyInsideRooms(index)}
                  isChecked={insideRoom.checked}
                  index={index}
                  label={insideRoom.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>
          <styled.checkBoxContainer>
            <styled.header>Outside Features</styled.header>
            <styled.group>
              {forSalePropertyOutSideFeaturesList.map((feature, index) => (
                <CheckBox
                  key={feature.name}
                  checkHandler={() =>
                    handleForSalePropertyOutSideFeatures(index)
                  }
                  isChecked={feature.checked}
                  index={index}
                  label={feature.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>
          <styled.checkBoxContainer>
            <styled.header>Community Ammenities</styled.header>
            <styled.group>
              {forSalePropertyCommunityAmmenitiesList.map((ammenity, index) => (
                <CheckBox
                  key={ammenity.name}
                  checkHandler={() =>
                    handleForSalePropertyCommunityAmmenities(index)
                  }
                  isChecked={ammenity.checked}
                  index={index}
                  label={ammenity.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>
        </>
      )}
      {type === "rental properties" && (
        <>
          <styled.checkBoxContainer>
            <styled.header>Property Types</styled.header>
            <styled.group>
              {rentalPropertyTypesList.map((propertyType, index) => (
                <CheckBox
                  key={propertyType.name}
                  checkHandler={() => handleRentalPropertyTypes(index)}
                  isChecked={propertyType.checked}
                  index={index}
                  label={propertyType.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>
          <styled.checkBoxContainer>
            <styled.header>Community Ammenities</styled.header>
            <styled.group>
              {rentalPropertyCommunityAmmenitiesList.map((ammenity, index) => (
                <CheckBox
                  key={ammenity.name}
                  checkHandler={() =>
                    handleRentalPropertyCommunityAmmenities(index)
                  }
                  isChecked={ammenity.checked}
                  index={index}
                  label={ammenity.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>
          <styled.checkBoxContainer>
            <styled.header>In Unit Features</styled.header>
            <styled.group>
              {rentalPropertyInUnitFeatures.map((feature, index) => (
                <CheckBox
                  key={feature.name}
                  checkHandler={() => handleRentalPropertyInUnitFeatures(index)}
                  isChecked={feature.checked}
                  index={index}
                  label={feature.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>
          <styled.checkBoxContainer>
            <styled.header>Pets Allowed</styled.header>
            <styled.group>
              {rentalPropertyPetsList.map((feature, index) => (
                <CheckBox
                  key={feature.name}
                  checkHandler={() => handleRentalPropertyPets(index)}
                  isChecked={feature.checked}
                  index={index}
                  label={feature.name}
                />
              ))}
            </styled.group>
          </styled.checkBoxContainer>
        </>
      )}
    </styled.Container>
  );
};

export default CheckBoxGroup;
