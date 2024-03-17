import React from "react";
import * as styled from "Pages/Home/Sections/SectionOne/SectionOneStyles";
import InViewAnimation from "HOCs/InViewAnimation";
import poster from "Assets/poster10.jpg";
import { useSelector } from "react-redux";

const SectionOne = () => {
  const bulletPoints = [".Modern", ".Convenience", ".Low Prices"];
  const screenSize = useSelector((state) => state.screenSize.value);
  const getHeight = () => {
    if (screenSize > 1900) return "700px";
    else if (screenSize > 600) return "500px";
    else return "350px";
  };
  const styles = {
    backgroundImage: `url(${poster})`,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: getHeight(),
    borderRadius: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    marginBottom: "10px",
    backgroundColor: "rgba(56, 59, 57, 0.8)",
    position: "relative",
  };
  return (
    <InViewAnimation styles={styles}>
      <styled.textContainer>
        <styled.imageText>
          You can trust us with your choice of housing
        </styled.imageText>
        <styled.pointRow>
          {bulletPoints.map((point) => (
            <styled.point key={point}>
              <styled.pointText>{point}</styled.pointText>
            </styled.point>
          ))}
        </styled.pointRow>
      </styled.textContainer>
    </InViewAnimation>
  );
};

export default SectionOne;
