import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { FaFlagUsa } from "react-icons/fa";
import { GiTexas } from "react-icons/gi";

import * as styled from "./LocationSelectorStyles";
import { secondaryThemeColor } from "Css/Variables";

const LocationSelector = ({
  country,
  region,
  onCountryChangeFunc,
  onRegionChangeFunc,
}) => {
  return (
    <styled.container>
      <styled.selectContainer>
        <styled.label>
          Country <FaFlagUsa size={14} color={secondaryThemeColor} /> :
        </styled.label>
        <CountryDropdown
          value={country}
          onChange={onCountryChangeFunc}
          classes="select-input"
        />
      </styled.selectContainer>
      {country && (
        <styled.selectContainer>
          <styled.label>
            State/Province/Region{" "}
            <GiTexas size={19} color={secondaryThemeColor} /> :
          </styled.label>
          <RegionDropdown
            value={region}
            onChange={onRegionChangeFunc}
            country={country}
            classes="select-input"
          />
        </styled.selectContainer>
      )}
    </styled.container>
  );
};

export default LocationSelector;
