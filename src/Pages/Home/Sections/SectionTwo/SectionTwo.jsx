import React from "react";
import * as styled from "Pages/Home/Sections/SectionTwo/SectionTwoStyles";
import poster from "Assets/poster5.jpg";
import InViewAnimation from "HOCs/InViewAnimation";

const SectionTwo = () => {
  const feedbackdata = [
    {
      NumberOfclients: "336+",
      service: "Apartment Sales",
    },
    {
      NumberOfclients: "220+",
      service: "Rentals",
    },
    {
      NumberOfclients: "500+",
      service: "Happy Clents",
    },
  ];
  return (
    <InViewAnimation styles={{width:"100%"}}>
      <styled.container>
        <styled.poster src={poster} alt="poster" />
        <styled.textContainer>
          <styled.heading>Get To Know Us More</styled.heading>
          <styled.infoText>
            We are a real estate agency based in Florida - USA, that has been
            around for more than 20 years. We have helped countless people find
            their dream home. We also serve consulting requests from our clients
            from all over the US and they are very satisfied with our excellent
            service.
          </styled.infoText>
          <styled.feedbackContainer>
            {feedbackdata.map((feedback, index) => (
              <styled.feedbackCard key={feedback.service} index={index}>
                <styled.feedbackHeader>
                  {feedback.NumberOfclients}
                </styled.feedbackHeader>
                <styled.feedbackText>{feedback.service}</styled.feedbackText>
              </styled.feedbackCard>
            ))}
          </styled.feedbackContainer>
        </styled.textContainer>
      </styled.container>
    </InViewAnimation>
  );
};

export default SectionTwo;
