import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "Context/AppContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import * as styled from "./AgentCardStyles";
import emptyProfile from "Assets/empty-profile.jpg";
import Spinner from "components/Spinner/Spinner";
import NotificationBar from "components/Notifications/NotificationBar";
import { deleteResource } from "HttpServices/Delete/deleteResource";
import { postResource } from "HttpServices/Post/postData";
import { shortenString } from "Utils/utils";

const AgentCard = ({ agent, isFromLocalServer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const notificationBarRef = useRef(null);
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const [deleteResponse, setDeleteResponse] = useState({
    message: "",
    type: "",
  });
  const { accessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const getPhoto = () => {
    if (isFromLocalServer) {
      if (agent.Photo === "null") return emptyProfile;
      else return agent.Photo;
    } else {
      if (agent?.photo?.href) return agent.photo.href;
      else return emptyProfile;
    }
  };
  const postPhoto = () => {
    if (agent?.photo?.href) return agent.photo.href;
    else return "null";
  };
  const getName = () => {
    if (isFromLocalServer) return shortenString(agent.Name,35);
    else {
      if (agent.full_name) return shortenString(agent.full_name,35);
      else return "not available";
    }
  };
  const postName = () => {
    if (agent.full_name) return agent.full_name;
    else return "not available";
  };
  const getAgentId = () => {
    if (isFromLocalServer) return agent.Agent_id;
    else return agent.advertiser_id;
  };
  const onNavigate = () => {
    navigate(`/agent/${getAgentId()}`);
  };
  useEffect(() => {
    if (postResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [postResponse, notificationBarRef]);
  const handlePost = (agent, e) => {
    e.stopPropagation();
    setIsLoading(true);
    console.log(agent);
    if (accessToken) {
      let data = {
        Name: postName(),
        Photo: postPhoto(),
        Agent_id: agent.advertiser_id,
      };
      postResource(
        "addproperty",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse
      );
    } else navigate("/login");
  };
  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (accessToken) {
      setIsLoading(true);
      deleteResource(
        "delete",
        id,
        accessToken,
        setIsLoading,
        setDeleteResponse,
        deleteResponse
      );
    } else navigate("/login");
  };
  useEffect(() => {
    if (deleteResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [notificationBarRef, deleteResponse]);
  return (
    <styled.container onClick={onNavigate}>
      <styled.poster src={getPhoto()} alt="agent-photo" />
      <styled.row>
        <styled.name>{getName()}</styled.name>
      </styled.row>
      {!isFromLocalServer ? (
        <styled.addLink onClick={(e) => handlePost(agent, e)}>
          {isLoading ? <Spinner /> : "Add"}
        </styled.addLink>
      ) : (
        <styled.deleteLink onClick={(e) => handleDelete(e, agent.Agent_id)}>
          {isLoading ? <Spinner /> : "Delete"}
        </styled.deleteLink>
      )}
      {postResponse.message && (
        <NotificationBar
          message={postResponse.message}
          type={postResponse.type}
          ref={notificationBarRef}
        />
      )}
      {deleteResponse.message && (
        <NotificationBar
          message={deleteResponse.message}
          type={deleteResponse.type}
          ref={notificationBarRef}
        />
      )}
    </styled.container>
  );
};

export default AgentCard;
