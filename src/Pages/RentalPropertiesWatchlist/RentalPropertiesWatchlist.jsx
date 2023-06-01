import React from 'react'

import { Page, PageInnerContainer } from 'Css/PageStyles'
import HttpError from 'HttpServices/Error/HttpError';
import useBackendQuery from 'HttpServices/Hooks/Backend/useBackendQuery';
import CardGrid from 'components/CardGrid/CardGrid';
import GridSkeleton from 'components/SkeletonLoaders/Grid/GridSkeleton'

const RentalPropertiesWatchlist = () => {
  const { data, isLoading, error } = useBackendQuery({ url: "properties/Rental" });
  return (
    <Page>
      <PageInnerContainer>
      {error && <HttpError message={error} size={"large"} />}
        {isLoading && <GridSkeleton type={"property"} />}
        {data && (
          <CardGrid
            contentlist={data}
            type={"property"}
            isFromLocalServer={true}
            header={"Rental Properties"}
          />
        )}
      </PageInnerContainer>
    </Page>
  )
}

export default RentalPropertiesWatchlist