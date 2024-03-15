import React from 'react'
import * as styled from './AgentFeesStyles'
import feesMap from "Assets/map.png"

const AgentFees = () => {
  return (
    <styled.container>
     <styled.Title>Agent Commission</styled.Title>
     <styled.mapContainer>
     <styled.map src={feesMap} alt='map'/>
     </styled.mapContainer>
    </styled.container>
  )
}

export default AgentFees