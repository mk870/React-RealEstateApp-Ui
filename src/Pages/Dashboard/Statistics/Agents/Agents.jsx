import React from 'react'
import * as styled from './AgentsStyles'
import TopAgents from './TopAgents/TopAgents'
import AgentFees from './AgentFees/AgentFees'

const Agents = () => {
  return (
    <styled.Container>
      <AgentFees/>
      <TopAgents/>
    </styled.Container>
  )
}

export default Agents