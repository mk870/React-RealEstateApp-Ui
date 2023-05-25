import React from "react";
import DatePicker from "react-datepicker";
import { BsFillCalendar2DateFill } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";
import * as styled from "./DateSelectorStyles";
import { secondaryThemeColor } from "Css/Variables";

const DateSelector = ({ startDate, onChangeFunc, label }) => {
  return (
    <styled.container>
      <styled.label>
        {label} <BsFillCalendar2DateFill color={secondaryThemeColor} size={13} /> :
      </styled.label>
      <DatePicker
        selected={startDate}
        onChange={(date) => onChangeFunc(date)}
        closeOnScroll={true}
        className="date-picker"
      />
    </styled.container>
  );
};

export default DateSelector;
