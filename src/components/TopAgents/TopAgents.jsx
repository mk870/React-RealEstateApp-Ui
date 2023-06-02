import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as styled from "./TopAgentsStyles";
import { agentsList } from "./Data/AgentsList";
import { HiOutlineDotsVertical } from "react-icons/hi";

const TopAgents = () => {
  const [topAgents] = useState(agentsList);
  const navigate = useNavigate();
  return (
    <styled.container>
      <styled.header>
        <styled.title>Top Agents</styled.title>
        <styled.viewAll onClick={() => navigate("/agents")}>
          View More
        </styled.viewAll>
      </styled.header>
      {topAgents.map((agent) => (
        <styled.agentRow
          key={agent.id}
          onClick={() => navigate(`/agent/${agent.id}`)}
        >
          <styled.agentInfo>
            <styled.agentImage src={agent.photo} alt="agent" />
            <styled.agentDetails>
              <styled.agentName>{agent.name}</styled.agentName>
              <styled.agentEmail>{agent.email}</styled.agentEmail>
            </styled.agentDetails>
          </styled.agentInfo>
          <HiOutlineDotsVertical
            fontSize={18}
            className="dots"
          />
        </styled.agentRow>
      ))}
    </styled.container>
  );
};

export default TopAgents;
