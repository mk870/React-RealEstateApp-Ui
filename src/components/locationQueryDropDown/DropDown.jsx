import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as styled from "./DropDownStyles";
import useFetchLocation from "HttpServices/Hooks/Location/useFetchLocation";
import Spinner from "components/Spinner/Spinner";
import { AppContext } from "Context/AppContext";

const DropDown = ({ input, setOpenSearchDropDown, setCity, setStateCode}) => {
  const { data, isLoading, error } = useFetchLocation({ inputQuery: input });
  const dropDownRef = useRef(null);
  const navigate = useNavigate();
  const { setSearchLocation, searchLocation } =
    useContext(AppContext);
  const handleClickOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setOpenSearchDropDown((value) => !value);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return document.removeEventListener("click", handleClickOutside, false);
  });
  const handleSelectCity = (city, stateCode) => {
    setSearchLocation({
      ...searchLocation,
      city: city,
      stateCode: stateCode,
    });
    setCity("");
    setStateCode("");
    setOpenSearchDropDown(false);
    navigate(`/properties-forsale`);
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setCity("");
        setStateCode("");
        setOpenSearchDropDown(false);
      }, 3000);
    }
  }, [error, setCity, setOpenSearchDropDown, setStateCode]);
  return (
    <styled.container ref={dropDownRef}>
      {data &&
        data.map((item, index) => (
          <styled.option
            key={index}
            onClick={() => handleSelectCity(item.city, item.state_code)}
          >{`${item.city}, ${item.state_code}`}</styled.option>
        ))}
      {isLoading && <Spinner />}
      {error && <styled.errorText>{error}</styled.errorText>}
    </styled.container>
  );
};

export default DropDown;
