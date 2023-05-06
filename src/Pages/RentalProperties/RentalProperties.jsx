import { AppContext } from "Context/AppContext";
import { Page, PageInnerContainer } from "Css/PageStyles";
import HttpError from "HttpServices/Error/HttpError";
import useFetchForRentProperties from "HttpServices/Hooks/Properties/ForRent/useFetchForRentProperties";
import CardGrid from "components/CardGrid/CardGrid";
import Filter from "components/PropertiesFilter/Filter";
import GridSkeleton from "components/SkeletonLoaders/Grid/GridSkeleton";
import React, { useContext } from "react";
import { useState } from "react";

const RentalProperties = () => {
  const { searchLocation } = useContext(AppContext);
  const [apiParams, setApiParams] = useState({
    stateCode: searchLocation.stateCode,
    sortby: "lowest_price",
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
    inUnitFeatures: null,
    dogsOk: false,
    communityAmmenities: null,
    catsOk: false,
  });
  const { data, isLoading, error } = useFetchForRentProperties({
    city: apiParams.city,
    stateCode: apiParams.stateCode,
    sortBy: apiParams.sortby,
    priceMin: apiParams.priceMin,
    priceMax: apiParams.priceMax,
    bedroomsMin: apiParams.bedroomsMin,
    bedroomsMax: apiParams.bedroomsMax,
    bathroomsMin: apiParams.minBathRooms,
    bathroomsMax: apiParams.maxBathRooms,
    propertyType: apiParams.propertyType,
    homeSizeMin: apiParams.minHomeSize,
    homeSizeMax: apiParams.maxHomeSize,
    inUnitFeatures: apiParams.inUnitFeatures,
    dogsOk: apiParams.dogsOk,
    catsOk: apiParams.catsOk,
    communityAmmenities: apiParams.communityAmmenities,
  });
  return (
    <Page>
      <PageInnerContainer>
        <Filter
          header={"Search Rental Properties By Filters"}
          setApiParams={setApiParams}
          type={"rental properties"}
          apiParams={apiParams}
        />
        {isLoading && apiParams.city && apiParams.stateCode && (
          <GridSkeleton />
        )}
        {error && <HttpError message={error} size={"large"} />}
        {data && (
          <CardGrid
            contentlist={data}
            type={"rental"}
            isFromLocalServer={false}
          />
        )}
      </PageInnerContainer>
    </Page>
  );
};

export default RentalProperties;
