import React from "react";
import { useSelector } from "react-redux";

import TopAgents from "./TopAgents/TopAgents";
import AgentFees from "./AgentFees/AgentFees";
import InViewAnimation from "HOCs/InViewAnimation";

const Agents = () => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const styles = () => {
    if (screenSize >= 1000) {
      return {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        width: "100%",
        gap: "10px",
      };
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "10px",
      };
    }
  };
  return (
    <InViewAnimation styles={styles()}>
      <AgentFees />
      <TopAgents />
    </InViewAnimation>
  );
};

export default Agents;
