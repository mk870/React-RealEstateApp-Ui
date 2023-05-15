import { Page, PageInnerContainer } from "Css/PageStyles";
import HttpError from "HttpServices/Error/HttpError";
import useFetchAgentSearch from "HttpServices/Hooks/Agents/useFetchAgentSearch";
import CardGrid from "components/CardGrid/CardGrid";
import Filter from "components/PropertiesFilter/Filter";
import GridSkeleton from "components/SkeletonLoaders/Grid/GridSkeleton";
import React from "react";
import { useState } from "react";

const Agents = () => {
  const [inputValues, setInputValues] = useState({
    stateCode: "",
    sortby: "",
    city: "",
    priceMin: "",
    priceMax: "",
    agentName: "",
  });
  const { data, isLoading, error } = useFetchAgentSearch({
    stateCode: inputValues.stateCode,
    city: inputValues.city,
    sortby:inputValues.sortby,
    priceMin: inputValues.priceMin,
    priceMax: inputValues.priceMax,
    agentName: inputValues.agentName,
  });
  return (
    <Page>
      <PageInnerContainer>
        <Filter
          header={"Search Agents By Filters"}
          setApiParams={setInputValues}
          type={"agents"}
          apiParams={inputValues}
        />
        {isLoading && <GridSkeleton type={"agents"}/>}
        {error && <HttpError message={error} size={"large"} />}
        {data && (
          <CardGrid
            contentlist={data}
            type={"agent"}
            isFromLocalServer={false}
          />
        )}
      </PageInnerContainer>
    </Page>
  );
};

export default Agents;
