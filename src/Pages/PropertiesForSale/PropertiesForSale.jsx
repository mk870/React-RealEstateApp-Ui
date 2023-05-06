import { AppContext } from "Context/AppContext";
import { Page, PageInnerContainer } from "Css/PageStyles";
import HttpError from "HttpServices/Error/HttpError";
import useFetchForSaleProperties from "HttpServices/Hooks/Properties/ForSale/useFetchForSaleProperties";
import CardGrid from "components/CardGrid/CardGrid";
import Filter from "components/PropertiesFilter/Filter";
import GridSkeleton from "components/SkeletonLoaders/Grid/GridSkeleton";
import { useContext, useState } from "react";

const PropertiesForSale = () => {
  const { searchLocation } = useContext(AppContext);
  const [apiParams, setApiParams] = useState({
    stateCode: searchLocation.stateCode,
    sortby: "newest",
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
    insideRoomsInProperty: null,
    propertyOutsideFeatures: null,
    communityAmmenities: null,
    minHomeLotSize: "",
    maxHomeLotSize: "",
  });
  const { data, isLoading, error } = useFetchForSaleProperties({
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
    insideRooms: apiParams.insideRoomsInProperty,
    outsideFeatures: apiParams.propertyOutsideFeatures,
    communityAmmenities: apiParams.communityAmmenities,
    lotSizeMin: apiParams.minHomeLotSize,
    lotSizeMax: apiParams.maxHomeLotSize,
  });
  
  return (
    <Page>
      <PageInnerContainer>
        <Filter
          header={"Search Properties For Sale By Filters"}
          setApiParams={setApiParams}
          type={"properties for sale"}
          apiParams={apiParams}
        />
        {isLoading && apiParams.city && apiParams.stateCode &&  (
          <GridSkeleton />
        )}
        {error && <HttpError message={error} size={"large"} />}
        {data && (
          <CardGrid
            contentlist={data}
            type={"forsale"}
            isFromLocalServer={false}
          />
        )}
      </PageInnerContainer>
    </Page>
  );
};

export default PropertiesForSale;
