import React from "react";

import { Page, PageInnerContainer } from "Css/PageStyles";
import HttpError from "HttpServices/Error/HttpError";
import useBackendQuery from "HttpServices/Hooks/Backend/useBackendQuery";
import CardGrid from "components/CardGrid/CardGrid";
import GridSkeleton from "components/SkeletonLoaders/Grid/GridSkeleton";

const AgentsWatchlist = () => {
  const { data, isLoading, error } = useBackendQuery({ url: "agents" });
  return (
    <Page>
      <PageInnerContainer>
        {error && <HttpError message={error} size={"large"} />}
        {isLoading && <GridSkeleton type={"agents"} />}
        {data && (
          <CardGrid
            contentlist={data}
            type={"agent"}
            isFromLocalServer={true}
            header={"Agent List"}
          />
        )}
      </PageInnerContainer>
    </Page>
  );
};

export default AgentsWatchlist;
