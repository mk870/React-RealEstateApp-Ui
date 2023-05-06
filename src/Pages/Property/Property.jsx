import { Page, PageInnerContainer } from "Css/PageStyles";
import HttpError from "HttpServices/Error/HttpError";
import useFetchProperty from "HttpServices/Hooks/Properties/useFetchProperty";
import PropertyDetails from "components/PropertyDetails/PropertyDetails";
import PropertySkeleton from "components/SkeletonLoaders/Property/PropertySkeleton";
import React from "react";
import { useParams } from "react-router-dom";

const Property = () => {
  const { propertyId } = useParams();
  const { data, isLoading, error } = useFetchProperty({ propertyId });
  return (
    <Page>
      <PageInnerContainer>
        {error && <HttpError message={error} size={"large"} />}
        {isLoading && <PropertySkeleton/>}
        {data && <PropertyDetails property={data} />}
      </PageInnerContainer>
    </Page>
  );
};

export default Property;
