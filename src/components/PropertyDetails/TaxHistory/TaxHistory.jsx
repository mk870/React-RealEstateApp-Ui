import React from "react";
import * as styled from "./TaxHistoryStyles";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiMoneyStack, GiPayMoney } from "react-icons/gi";
import { mainThemeColor } from "Css/Variables";
import { useSelector } from "react-redux";
import millify from "millify";

const TaxHistory = ({ property }) => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 26 : 20;
  const iconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
      color: mainThemeColor,
    };
  };
  const nullChecker = (value) => {
    if (value) return value;
    else return "not available";
  };
  return (
    <styled.container>
      {property?.tax_history?.length > 0 ? (
        <styled.grid>
          {property.tax_history.map((record, index) => (
            <styled.record key={index}>
              <styled.row>
                <GiMoneyStack size={iconSize} style={iconStyles()} />
                <styled.textContainer>
                  <styled.recordTitle>Property Value: </styled.recordTitle>
                  <styled.text>
                    {record?.assessment?.total
                      ? `$${millify(record.assessment.total)}`
                      : "not available"}
                  </styled.text>
                </styled.textContainer>
              </styled.row>
              <styled.row>
                <GiPayMoney size={iconSize} style={iconStyles()} />
                <styled.textContainer>
                  <styled.recordTitle>Tax: </styled.recordTitle>
                  <styled.text>
                    {record.tax ? `$${millify(record.tax)}` : "not available"}
                  </styled.text>
                </styled.textContainer>
              </styled.row>
              <styled.row>
                <AiOutlineCalendar size={iconSize} style={iconStyles()} />
                <styled.textContainer>
                  <styled.recordTitle>Year: </styled.recordTitle>
                  <styled.text>{nullChecker(record.year)}</styled.text>
                </styled.textContainer>
              </styled.row>
            </styled.record>
          ))}
        </styled.grid>
      ) : (
        <styled.notAvailable>No Tax Records</styled.notAvailable>
      )}
    </styled.container>
  );
};

export default TaxHistory;
