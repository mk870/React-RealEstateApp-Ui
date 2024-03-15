import React from "react";
import * as styled from "./LocationsStyles";
import MapView from "components/Map/MapView";
import { useState } from "react";
import { cities } from "./Data/Data";
import Carousel from "./Carousel/Carousel";
import { useEffect } from "react";

const Locations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewState, setViewState] = useState({
    latitude: cities[0].lat,
    longitude: cities[0].lon,
    zoom: 12,
  });
  const totalDataIndex = cities.length - 1;
  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  const nextSlide = () => {
    if (currentSlide === totalDataIndex) {
      setCurrentSlide(0);
      setViewState({
        ...viewState,
        latitude: cities[0].lat,
        longitude: cities[0].lon,
      });
    } else {
      setCurrentSlide(currentSlide + 1);
      setViewState({
        ...viewState,
        latitude: cities[currentSlide + 1].lat,
        longitude: cities[currentSlide + 1].lon,
      });
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalDataIndex);
      setViewState({
        ...viewState,
        latitude: cities[totalDataIndex].lat,
        longitude: cities[totalDataIndex].lon,
      });
    } else {
      setCurrentSlide(currentSlide - 1);
      setViewState({
        ...viewState,
        latitude: cities[currentSlide - 1].lat,
        longitude: cities[currentSlide - 1].lon,
      });
    }
  };
  return (
    <styled.container>
      <styled.title>
        Top 10 Cities in Property Sales{" "}
        <styled.text>(last 6 months)</styled.text>
      </styled.title>
      <styled.subContainer>
        <styled.mapContainer>
          <MapView viewState={viewState} setViewState={setViewState} />
        </styled.mapContainer>
        <Carousel
          data={cities}
          currentSlide={currentSlide}
          onNextSlide={nextSlide}
          onPrevSlide={prevSlide}
        />
      </styled.subContainer>
    </styled.container>
  );
};

export default Locations;
