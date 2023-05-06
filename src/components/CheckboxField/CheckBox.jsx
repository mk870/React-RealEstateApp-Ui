import React from "react";
import * as styled from "components/CheckboxField/CheckBoxStyles";

const CheckBox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <styled.container>
      <styled.label>{label}</styled.label>
      <styled.checkbox
        type="checkbox"
        onChange={checkHandler}
        id={`checkbox-${index}`}
        checked={isChecked}
      />
    </styled.container>
  );
};

export default CheckBox;
