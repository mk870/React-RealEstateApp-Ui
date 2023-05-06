import React from "react";
import * as styled from "./ImageScrollerStyles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import emptyPropertyImage from "Assets/nullPropertyPoster.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { secondaryThemeColor } from "Css/Variables";

const ImageScroller = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let totalNumberOfImages;
  const iconSize = 20;
  totalNumberOfImages = images.length - 1;
  const nextSlide = () => {
    if (currentSlide === totalNumberOfImages) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalNumberOfImages);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  const getImages = (image) => {
    if (image.href) {
      return image.href;
    } else {
      return emptyPropertyImage;
    }
  };
  return (
    <styled.container>
      <styled.LeftArrowContainer>
        <FaArrowAltCircleLeft
          size={iconSize}
          color={secondaryThemeColor}
          onClick={prevSlide}
        />
      </styled.LeftArrowContainer>
      {images.map((image, index) => (
        <styled.ImageContainer
          key={index}
          isInView={currentSlide === index ? true : false}
        >
          <styled.Image src={getImages(image)} alt="property-photo" />
        </styled.ImageContainer>
      ))}
      <styled.RightArrowContainer>
        <FaArrowAltCircleRight
          size={iconSize}
          color={secondaryThemeColor}
          onClick={nextSlide}
        />
      </styled.RightArrowContainer>
    </styled.container>
  );
};

export default ImageScroller;
