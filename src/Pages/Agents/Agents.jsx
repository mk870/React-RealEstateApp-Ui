import { Page, PageInnerContainer } from 'Css/PageStyles'
import Filter from 'components/PropertiesFilter/Filter'
import React from 'react'
import { useState } from 'react';

const Agents = () => {
  const [inputValues, setInputValues] = useState({
    stateCode: "FL",
    sortby: "newest",
    city: "Miami",
  });
  return (
    <Page>
      <PageInnerContainer>
      <Filter
          header={"Search Agents By Filters"}
          setValues={setInputValues}
          type={"agents"}
          values = {inputValues}
        />
      </PageInnerContainer>
    </Page>
  )
}

export default Agents