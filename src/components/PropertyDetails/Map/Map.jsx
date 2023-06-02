import React, { useState } from "react";
import { GiPostStamp, GiRoad, GiTexas } from "react-icons/gi";
import { useSelector } from "react-redux";
import { AiOutlineNumber } from "react-icons/ai";
import { FaCity, FaFlagUsa } from "react-icons/fa";
import { MdOutlineLandscape } from "react-icons/md";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { mainThemeColor } from "Css/Variables";
import * as styled from "./MapStyles";
import markerSvg from "Assets/marker.svg";

import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker;


const MapDisplay = ({ coordinates, property }) => {
  const { lon, lat } = coordinates;
  const [viewState, setViewState] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
  });
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 26 : 20;
  const iconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
      color: mainThemeColor,
    };
  };
  const getStreetNumber = () => {
    if (property?.location?.address?.street_number) {
      return property.location.address.street_number;
    } else return "not available";
  };
  const getStreetName = () => {
    if (property?.location?.address?.street_name) {
      return property.location.address.street_name;
    } else return "not available";
  };
  const getCity = () => {
    if (property?.location?.address?.city) {
      return property.location.address.city;
    } else return "not available";
  };
  const getState = () => {
    if (property?.location?.address?.state) {
      return property.location.address.state;
    } else return "not available";
  };
  const getPotalCode = () => {
    if (property?.location?.address?.postal_code) {
      return property.location.address.postal_code;
    } else return "not available";
  };
  const getCountry = () => {
    if (property?.location?.address?.country) {
      return property.location.address.country;
    } else return "not available";
  };
  const getCounty = () => {
    if (property?.location?.county?.name) {
      return property.location.county.name;
    } else return "not available";
  };
  const location = [
    {
      name: "Street number",
      value: getStreetNumber(),
      icon: <AiOutlineNumber size={iconSize} style={iconStyles()} />,
    },
    {
      name: "Street name",
      value: getStreetName(),
      icon: <GiRoad size={iconSize} style={iconStyles()} />,
    },
    {
      name: "City",
      value: getCity(),
      icon: <FaCity size={iconSize} style={iconStyles()} />,
    },
    {
      name: "County",
      value: getCounty(),
      icon: <MdOutlineLandscape size={iconSize} style={iconStyles()} />,
    },
    {
      name: "State",
      value: getState(),
      icon: <GiTexas size={iconSize} style={iconStyles()} />,
    },
    {
      name: "Postal code",
      value: getPotalCode(),
      icon: <GiPostStamp size={iconSize} style={iconStyles()} />,
    },
    {
      name: "Country",
      value: getCountry(),
      icon: <FaFlagUsa size={iconSize} style={iconStyles()} />,
    },
  ];
  return (
    <styled.container>
      <styled.grid>
        {location.map((item) => (
          <styled.item key={item.name}>
            {item.icon}
            <styled.header>{item.name}:</styled.header>
            <styled.text>{item.value}</styled.text>
          </styled.item>
        ))}
      </styled.grid>
      <styled.mapContainer>
        <Map
          {...viewState}
          onMove={(event) => setViewState(event.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Marker longitude={lon} latitude={lat}>
            <styled.marker src={markerSvg} />
          </Marker>
          <NavigationControl />
        </Map>
      </styled.mapContainer>
    </styled.container>
  );
};

export default MapDisplay;
