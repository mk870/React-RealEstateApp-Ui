import React from "react";

import * as styled from "./PersonalFormStyles";
import InputField from "components/InputField/InputField";
import TextArea from "components/TextArea/TextArea";
import DateSelector from "components/DateSelector/DateSelector";
import PhoneSelector from "components/PhoneNumberSelector/PhoneSelector";

const PersonalForm = ({ setPersonalDetails, personalDetails }) => {
  return (
    <styled.container>
      <InputField
        label={"First Name"}
        inputValue={personalDetails.firstName}
        isRequired={false}
        isSearch={false}
        onChangeFunc={(value) =>
          setPersonalDetails({ ...personalDetails, firstName: value })
        }
        backgroundColor={"transparent"}
        hasFloatingLabel={true}
        handleOnKeyEnter={false}
        size={"large"}
      />
      <InputField
        label={"Last Name"}
        inputValue={personalDetails.lastName}
        isRequired={false}
        isSearch={false}
        onChangeFunc={(value) =>
          setPersonalDetails({ ...personalDetails, lastName: value })
        }
        backgroundColor={"transparent"}
        hasFloatingLabel={true}
        handleOnKeyEnter={false}
        size={"large"}
      />
      <TextArea
        label={"Biography"}
        textAreaValue={personalDetails.bio}
        isRequired={false}
        onChangeFunc={(value) =>
          setPersonalDetails({ ...personalDetails, bio: value })
        }
        backgroundColor={"transparent"}
        hasFloatingLabel={true}
        handleOnKeyEnter={false}
        size={"large"}
      />
      <DateSelector
        label={"Date Of Birth"}
        startDate={personalDetails.dateOfBirth}
        onChangeFunc={(date) =>
          setPersonalDetails({ ...personalDetails, dateOfBirth: date })
        }
      />
      <PhoneSelector
        label={"Phone Number"}
        onChangeFunc={(value) =>
          setPersonalDetails({ ...personalDetails, phone: value })
        }
        phoneNumber={personalDetails.phone}
      />
    </styled.container>
  );
};

export default PersonalForm;
