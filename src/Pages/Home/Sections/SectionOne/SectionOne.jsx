import React from 'react'
import * as styled from 'Pages/Home/Sections/SectionOne/SectionOneStyles'

const SectionOne = () => {
  const bulletPoints = [".Modern",".Convenience",".Low Prices"]
  return (
    <styled.section1>
        <styled.textContainer>
          <styled.imageText>You can trust us with your choice of housing</styled.imageText>
          <styled.pointRow>
            {bulletPoints.map((point)=>(
              <styled.point key={point}>
                <styled.pointText>{point}</styled.pointText>
              </styled.point>
            ))}
          </styled.pointRow>
        </styled.textContainer>
      </styled.section1>
  )
}

export default SectionOne