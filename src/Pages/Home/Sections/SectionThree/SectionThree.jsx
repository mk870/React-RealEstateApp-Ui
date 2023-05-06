import React from "react";
import * as styled from "Pages/Home/Sections/SectionThree/SectionThreeStyles";
import map from "Assets/map3.jpg";

const SectionThree = () => {
  return (
    <styled.container>
      <styled.header>
        <styled.headerText>
          Wherever you are, you will definately get a place
        </styled.headerText>
        <styled.subheaderText>
          Wherever you want to live, don't hesitate to contact us, we will find
          the best housing for you, even in the outskirts of the country.
        </styled.subheaderText>
      </styled.header>
      <styled.mapImage src={map} alt="usa-map" />
    </styled.container>
  );
};

export default SectionThree;
