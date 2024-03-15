import React, { useEffect } from "react";
import { useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import markerSvg from "Assets/marker.svg";
import { mapApiKey } from "Utils/utils";
import * as styled from './MapViewStyles'

const MapView = ({ viewState,setViewState }) => {
  return (
    <Map
      {...viewState}
      onMove={(event) => setViewState(event.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={mapApiKey}
    >
      <Marker longitude={viewState.longitude} latitude={viewState.latitude}>
        <styled.marker src={markerSvg} />
      </Marker>
      <NavigationControl />
    </Map>
  );
};

export default MapView;
