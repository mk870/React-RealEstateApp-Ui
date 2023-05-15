import { AppContext } from "Context/AppContext";
import { Page, PageInnerContainer } from "Css/PageStyles";
import HttpError from "HttpServices/Error/HttpError";
import useFetchSoldProperties from "HttpServices/Hooks/Properties/Sold/useFetchSoldProperties";
import CardGrid from "components/CardGrid/CardGrid";
import Filter from "components/PropertiesFilter/Filter";
import GridSkeleton from "components/SkeletonLoaders/Grid/GridSkeleton";
import React from "react";
import { useState } from "react";
import { useContext } from "react";

const SoldProperties = () => {
  const { searchLocation } = useContext(AppContext);
  const [apiParams, setApiParams] = useState({
    stateCode: searchLocation.stateCode,
    sortby: "sold_date",
    city: searchLocation.city,
    priceMin: "",
    priceMax: "",
    bedroomsMin: "",
    bedroomsMax: "",
    minBathRooms: "",
    maxBathRooms: "",
    propertyType: null,
    minHomeSize: "",
    maxHomeSize: "",
    minHomeLotSize: "",
    maxHomeLotSize: "",
  });
  const { data, isLoading, error } = useFetchSoldProperties({
    city: apiParams.city,
    stateCode: apiParams.stateCode,
    sortby: apiParams.sortby,
    priceMin: apiParams.priceMin,
    priceMax: apiParams.priceMax,
    bedroomsMin: apiParams.bedroomsMin,
    bedroomsMax: apiParams.bedroomsMax,
    bathroomsMin: apiParams.minBathRooms,
    bathroomsMax: apiParams.maxBathRooms,
    propertyType: apiParams.propertyType,
    homeSizeMin: apiParams.minHomeSize,
    homeSizeMax: apiParams.maxHomeSize,
    lotSizeMin: apiParams.minHomeLotSize,
    lotSizeMax: apiParams.maxHomeLotSize,
  });
  return (
    <Page>
      <PageInnerContainer>
        <Filter
          header={"Search Properties Sold By Filters"}
          setApiParams={setApiParams}
          type={"properties sold"}
          apiParams={apiParams}
        />
        {isLoading && apiParams.city && apiParams.stateCode && (
          <GridSkeleton type={"properties"} />
        )}
        {error && <HttpError message={error} size={"large"} />}
        {data && (
          <CardGrid
            contentlist={data}
            type={"sold"}
            isFromLocalServer={false}
          />
        )}
      </PageInnerContainer>
    </Page>
  );
};

export default SoldProperties;
