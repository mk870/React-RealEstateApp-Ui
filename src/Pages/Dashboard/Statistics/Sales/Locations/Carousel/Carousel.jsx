import React from "react";
import * as styled from "./CarouselStyles";
import Card from "../Card/Card";

const Carousel = ({ data, onPrevSlide, currentSlide, onNextSlide }) => {
  return (
    <styled.Container>
      <styled.slidercontent>
        {data.map((item, index) => (
          <div
            className={currentSlide === index ? "current" : "slide"}
            key={item.name}
          >
            <Card city={item} prevSlide={onPrevSlide} nextSlide={onNextSlide} />
          </div>
        ))}
      </styled.slidercontent>
    </styled.Container>
  );
};

export default Carousel;
