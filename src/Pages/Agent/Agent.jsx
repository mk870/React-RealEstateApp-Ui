import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlinePhone, AiFillStar } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { BiUserVoice } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";

import useFetchAgentListings from "HttpServices/Hooks/Agents/useFetchAgentListings";
import HttpError from "HttpServices/Error/HttpError";
import * as styled from "./AgentStyles";
import emptyProfile from "Assets/empty-profile.jpg";
import { useSelector } from "react-redux";
import { mainThemeColor } from "Css/Variables";
import Button from "components/Button/Button";
import { postResource } from "HttpServices/Post/postData";
import { AppContext } from "Context/AppContext";
import NotificationBar from "components/Notifications/NotificationBar";
import { Page, PageInnerContainer } from "Css/PageStyles";
import useFetchAgent from "HttpServices/Hooks/Agents/useFetchAgent";
import ToggleableGrid from "components/ToggleableGrid/ToggleableGrid";
import PropertySkeleton from "components/SkeletonLoaders/Property/PropertySkeleton";
import GridSkeleton from "components/SkeletonLoaders/Grid/GridSkeleton";
import Spinner from "components/Spinner/Spinner";
import { stringToNumber } from "Utils/utils";

const Agent = () => {
  const { agentId } = useParams();
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 26 : 20;
  const [isLoading, setIsLoading] = useState(false);
  const notificationBarRef = useRef(null);
  const { accessToken, setPostedItem } = useContext(AppContext);
  const navigate = useNavigate();
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const iconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
      color: mainThemeColor,
    };
  };
  const agentResponse = useFetchAgent({ advertiserId: agentId });
  const agentListingResponse = useFetchAgentListings({ advertiserId: agentId });
  const getImage = () => {
    if (agentResponse.data?.photo?.href) return agentResponse.data.photo.href;
    else return emptyProfile;
  };
  const postPhoto = () => {
    if (agentResponse.data?.photo?.href) return agentResponse.data.photo.href;
    else return "null";
  };
  const getName = () => {
    if (agentResponse.data?.fullname) return agentResponse.data.fullname;
    else return "not available";
  };
  const calculateExperience = () => {
    if (agentResponse.data.first_year) {
      const currentYear = parseInt(new Date().getFullYear());
      return `${currentYear - agentResponse.data.first_year} years`;
    } else return "not available";
  };
  const getRating = (rating) => {
    if (rating) {
      let stars = Array(rating).fill(<AiFillStar size={12} color="gold" />);
      return stars;
    } else return "not available";
  };
  const getPhoneNumbers = () => {
    if (agentResponse.data.phones) {
      if (agentResponse.data.phones.length > 0) {
        return (
          <styled.row>
            {agentResponse.data.phones.map((phone, index) => (
              <styled.text key={index}>
                {agentResponse.data.phones.length === 1
                  ? phone.number
                  : index === agentResponse.data.phones.length - 1
                  ? phone.number
                  : `${phone.number},`}
              </styled.text>
            ))}
          </styled.row>
        );
      } else return <styled.text>{"not available"}</styled.text>;
    } else return <styled.text>{"not available"}</styled.text>;
  };
  const getSpecialities = () => {
    if (agentResponse.data.specialties) {
      if (agentResponse.data.specialties.length > 0) {
        return (
          <styled.specialitiesItem>
            {agentResponse.data.specialties.map((item, index) => (
              <styled.text key={index}>
                {agentResponse.data.specialties.length === 1
                  ? item
                  : index === agentResponse.data.specialties.length - 1
                  ? item
                  : `${item},`}
              </styled.text>
            ))}
          </styled.specialitiesItem>
        );
      } else return "not available";
    } else return "not available";
  };
  const handlePost = (agent, e) => {
    e.stopPropagation();
    setIsLoading(true);
    console.log(agent);
    if (accessToken) {
      let data = {
        Name: getName(),
        Photo: postPhoto(),
        Agent_id: stringToNumber(agentId),
      };
      postResource(
        "agent",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse,
        setPostedItem
      );
    } else navigate("/login");
  };
  useEffect(() => {
    if (postResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [postResponse, notificationBarRef]);
  return (
    <Page>
      <PageInnerContainer>
        {agentResponse.isLoading && <PropertySkeleton />}
        {agentResponse.error && (
          <HttpError message={agentResponse.error} size={"large"} />
        )}
        {agentResponse.data && (
          <styled.containter>
            <styled.personalDetails>
              <styled.poster src={getImage()} alt="poster" />
              <styled.name>{getName()}</styled.name>
              <styled.details>
                <styled.detailItem>
                  <BiUserVoice size={iconSize} style={iconStyles()} />
                  <styled.textContainer>
                    <styled.title>Slogan:</styled.title>
                    <styled.text>
                      {agentResponse.data.slogan
                        ? agentResponse.data.slogan
                        : "not available"}
                    </styled.text>
                  </styled.textContainer>
                </styled.detailItem>
                <styled.detailItem>
                  <BsCalendarDate size={iconSize} style={iconStyles()} />
                  <styled.textContainer>
                    <styled.title>Experience:</styled.title>
                    <styled.text>{calculateExperience()}</styled.text>
                  </styled.textContainer>
                </styled.detailItem>
                <styled.detailItem>
                  <AiFillStar size={iconSize} style={iconStyles()} />
                  <styled.textContainer>
                    <styled.title>Rating:</styled.title>
                    <styled.text>
                      {getRating() === "not available" ? (
                        "not available"
                      ) : (
                        <styled.row>
                          {getRating().map((star, index) => (
                            <div className="star" key={index}>
                              {star}
                            </div>
                          ))}
                        </styled.row>
                      )}
                    </styled.text>
                  </styled.textContainer>
                </styled.detailItem>
                <styled.detailItem>
                  <AiOutlinePhone size={iconSize} style={iconStyles()} />
                  <styled.textContainer>
                    <styled.title>Phone:</styled.title>
                    <styled.text>{getPhoneNumbers()}</styled.text>
                  </styled.textContainer>
                </styled.detailItem>
                <styled.detailItem>
                  <MdEmail size={iconSize} style={iconStyles()} />
                  <styled.textContainer>
                    <styled.title>Email:</styled.title>
                    <styled.text>
                      {agentResponse.data.email
                        ? agentResponse.data.email
                        : "not available"}
                    </styled.text>
                  </styled.textContainer>
                </styled.detailItem>
                <styled.detailItem>
                  <GiWorld size={iconSize} style={iconStyles()} />
                  <styled.textContainer>
                    <styled.title>Website:</styled.title>
                    <styled.text>
                      {agentResponse.data.website ? (
                        <a
                          className="link"
                          href={agentResponse.data.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {agentResponse.data.website}
                        </a>
                      ) : (
                        "not available"
                      )}
                    </styled.text>
                  </styled.textContainer>
                </styled.detailItem>
              </styled.details>
            </styled.personalDetails>
            <styled.specialitiesContainer>
              <styled.title>Specialities:</styled.title>
              {getSpecialities()}
            </styled.specialitiesContainer>
            <styled.bio>
              <styled.title>Bio:</styled.title>
              <styled.text>
                {agentResponse.data.bio
                  ? agentResponse.data.bio
                  : "not available"}
              </styled.text>
            </styled.bio>
            <Button
              buttonText={isLoading ? <Spinner/> : "Add to watchlist"}
              size={"medium"}
              color={"normal"}
              type={"click"}
              onClickFunc={(e) => handlePost(agentResponse.data, e)}
            />
          </styled.containter>
        )}
        {agentListingResponse.error && (
          <HttpError message={agentListingResponse.error} size={"large"} />
        )}
        {agentListingResponse.isLoading && <GridSkeleton type={"properties"} />}
        {agentListingResponse.data && (
          <>
            {agentListingResponse.data.forRent.total > 0 && (
              <ToggleableGrid
                contentList={agentListingResponse.data.forRent.results}
                header={"Recommended Rental Properties"}
                type={"rental recommendations"}
              />
            )}
            {agentListingResponse.data.forSale.total > 0 && (
              <ToggleableGrid
                contentList={agentListingResponse.data.forSale.results}
                header={"Recommended Properties forSale"}
                type={"forsale recommendations"}
              />
            )}
            {agentListingResponse.data.forSold.total > 0 && (
              <ToggleableGrid
                contentList={agentListingResponse.data.forSold.results}
                header={"Recommended Properties Sold"}
                type={"sold"}
              />
            )}
          </>
        )}
        {postResponse.message && (
          <NotificationBar
            message={postResponse.message}
            type={postResponse.type}
            ref={notificationBarRef}
          />
        )}
      </PageInnerContainer>
    </Page>
  );
};

export default Agent;
