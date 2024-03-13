import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import millify from "millify";

import * as styled from "./LatestSalesStyles";
import { latestsalesList } from "../Data/latestSalesList";
import { addPropertyCoordinates } from "Redux/Slices/Property/PropertyCoordinatesSlice";

const LatestSales = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (id, coordinates) => {
    dispatch(addPropertyCoordinates(coordinates));
    navigate(`/property/${id}`);
  };
  return (
    <styled.container>
      <styled.header>
        <styled.title>Latest Property Sales</styled.title>
        <styled.viewAll onClick={() => navigate("/properties-sold")}>
          View More
        </styled.viewAll>
      </styled.header>
      {latestsalesList.map((item) => (
        <styled.salesRow
          key={item.name}
          onClick={() => handleNavigate(item.property_id, item.coordinate)}
        >
          <styled.salesInfo>
            <styled.propertyImage src={item.image} alt="property" />
            <styled.propertyDetails>
              <styled.propertyName>{item.name}</styled.propertyName>
              <styled.propertyAddress>
                {`${item.city}, ${item.state}, ${item.state_code}`}
              </styled.propertyAddress>
            </styled.propertyDetails>
          </styled.salesInfo>
          <styled.salesAmount>
            {`$${millify(item.list_price)}`}
          </styled.salesAmount>
        </styled.salesRow>
      ))}
    </styled.container>
  );
};

export default LatestSales;
