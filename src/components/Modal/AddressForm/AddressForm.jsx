import React from "react";

import * as styled from "./AddressFormStyles";
import InputField from "components/InputField/InputField";
import LocationSelector from "components/CountryRegionSelector/LocationSelector";

const AddressForm = ({ addressDetails, setAddressDetails }) => {
  return (
    <styled.container>
      <InputField
        label={"Street Number"}
        isRequired={false}
        isSearch={false}
        size={"large"}
        inputValue={addressDetails.streetNumber}
        onChangeFunc={(value) =>
          setAddressDetails({ ...addressDetails, streetNumber: value })
        }
        backgroundColor={"transparent"}
        handleOnKeyEnter={false}
        hasFloatingLabel={true}
      />
      <InputField
        label={"Street Name"}
        isRequired={false}
        isSearch={false}
        size={"large"}
        inputValue={addressDetails.streetName}
        onChangeFunc={(value) =>
          setAddressDetails({ ...addressDetails, streetName: value })
        }
        backgroundColor={"transparent"}
        handleOnKeyEnter={false}
        hasFloatingLabel={true}
      />
      <InputField
        label={"City"}
        isRequired={false}
        isSearch={false}
        size={"large"}
        inputValue={addressDetails.city}
        onChangeFunc={(value) =>
          setAddressDetails({ ...addressDetails, city: value })
        }
        backgroundColor={"transparent"}
        handleOnKeyEnter={false}
        hasFloatingLabel={true}
      />
      <LocationSelector
        country={addressDetails.country}
        region={addressDetails.state}
        onCountryChangeFunc={(value) =>
          setAddressDetails({ ...addressDetails, country: value })
        }
        onRegionChangeFunc={(value) =>
          setAddressDetails({ ...addressDetails, state: value })
        }
      />
    </styled.container>
  );
};

export default AddressForm;
