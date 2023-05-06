import React from "react";
import * as styled from "./PropertyDetailsStyles";
import ImageScroller from "components/ImageScroller/ImageScroller";
import MapDisplay from "components/PropertyDetails/Map/Map";
import OtherFeatures from "./OtherFeatures/OtherFeatures";
import { useState } from "react";
import Overview from "components/PropertyDetails/Overview/Overview";
import Schools from "./Schools/Schools";
import TaxHistory from "./TaxHistory/TaxHistory";

const PropertyDetails = ({ property }) => {
  const [inView, setInView] = useState("Overview");
  const links = ["Overview", "Location", "Features", "Schools", "Tax History"];
  return (
    <styled.container>
      {property.photos?.length > 0 ? (
        <ImageScroller images={property.photos} />
      ) : (
        <p
          style={{
            margin: "10px 0",
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
            textAlign: "start",
            width: "100%",
          }}
        >
          No Photos
        </p>
      )}
      <styled.row2>
        {links.map((link) => (
          <styled.link
            key={link}
            onClick={() => setInView(link)}
            active={inView === link}
          >
            {link}
          </styled.link>
        ))}
      </styled.row2>
      {inView === "Features" && <OtherFeatures property={property} />}
      {inView === "Schools" && <Schools property={property} />}
      {inView === "Location" && (
        <MapDisplay
          coordinates={property.location.address.coordinate}
          property={property}
        />
      )}
      {inView === "Overview" && (
        <Overview property={property} type={property.status} />
      )}
      {inView === "Tax History" && <TaxHistory property={property} />}
    </styled.container>
  );
};

export default PropertyDetails;
