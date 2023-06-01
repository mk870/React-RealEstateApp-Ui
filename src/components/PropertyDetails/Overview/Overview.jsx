import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineCalendar, AiOutlineBuild } from "react-icons/ai";
import { BiBed, BiBath } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlinePool, MdOutlineMeetingRoom } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import millify from "millify";

import { mainThemeColor } from "Css/Variables";
import Button from "components/Button/Button";
import { AppContext } from "Context/AppContext";
import * as styled from "./OverviewStyles";
import { postResource } from "HttpServices/Post/postData";
import NotificationBar from "components/Notifications/NotificationBar";
import nullPropertyImage from "Assets/nullPropertyPoster.jpg";
import {
  capitalizeFirstLetter,
  numberToString,
  stringToNumber,
} from "Utils/utils";
import Spinner from "components/Spinner/Spinner";

const Overview = ({ property, type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const notificationBarRef = useRef(null);
  const [postResponse, setPostResponse] = useState({
    message: "",
    type: "",
  });
  const { accessToken, setPostedItem } = useContext(AppContext);
  const navigate = useNavigate();
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 26 : 20;
  const iconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
      color: mainThemeColor,
    };
  };
  const emptyPropertyName = "Property name unavailable";
  const formatPropertyType = (type) => {
    let replaced;
    if (type.includes("_")) {
      replaced = type.replace("_", " ");
    } else {
      replaced = type;
    }
    return capitalizeFirstLetter(replaced);
  };
  const getPropertyName = () => {
    if (type === "for_rent") {
      if (property.description?.type) {
        return formatPropertyType(property.description.type);
      } else return emptyPropertyName;
    } else {
      if (property?.branding[0]?.name) {
        return property.branding[0].name;
      } else return emptyPropertyName;
    }
  };
  const getPropertyPrice = () => {
    if (type === "for_rent") {
      if (property?.list_price_max) {
        return `$${property.list_price_max}/month`;
      } else return "---";
    } else {
      if (property?.list_price) {
        return `$${millify(property.list_price)}`;
      } else return "---";
    }
  };
  const postPropertyPrice = () => {
    if (type === "for_rent") {
      if (property?.list_price_max) {
        return numberToString(property.list_price_max);
      } else return "---";
    } else {
      if (property?.list_price) {
        return millify(property.list_price);
      } else return "---";
    }
  };
  const getPropertyStatus = () => {
    if (type === "for_rent") return "Rental";
    if (type === "sold") return "Sold";
    else return "Forsale";
  };
  const getPropertyBedrooms = () => {
    if (type === "for_rent") {
      if (property?.description?.beds_max) {
        return numberToString(property.description.beds_max);
      } else return "--";
    } else {
      if (property?.description?.beds) {
        return numberToString(property.description.beds);
      } else return "--";
    }
  };
  const getPropertyBathrooms = () => {
    if (type === "for_rent") {
      if (property?.description?.baths_max) {
        return numberToString(property.description.baths_max);
      } else return "--";
    } else {
      if (property?.description?.baths) {
        return numberToString(property.description.baths);
      } else return "--";
    }
  };
  const getpropertySize = () => {
    if (type === "for_rent") {
      if (property?.description?.sqft_max)
        return numberToString(property.description.sqft_max);
      else return "--";
    } else {
      if (property?.description?.sqft)
        return numberToString(property.description.sqft);
      else return "--";
    }
  };
  const getPropertyGarages = () => {
    if (property.description?.garage) return property.description.garage;
    else return "---";
  };
  const getPropertyPool = () => {
    if (property.description.pool) return property.description.pool;
    else return "no pool";
  };
  const getPropertyYearBuilt = () => {
    if (property.description?.year_built)
      return property.description.year_built;
    else return "---";
  };
  const getPropertyStories = () => {
    if (property.description?.stories) return property.description.stories;
    else return "---";
  };
  const getPropertyRooms = () => {
    if (property.description?.rooms) return property.description.rooms;
    else return "---";
  };
  const getPropertyType = () => {
    if (property.description?.type) return property.description.type;
    else return "---";
  };
  const pluralize = (word, count) => {
    if (count === 1) return word;
    if (word === "Story") return `Stories`;
    else return `${word}s`;
  };
  const features = [
    {
      icon: <BiBed size={iconSize} style={iconStyles()} />,
      text: `${getPropertyBedrooms()}`,
      name: pluralize("Bedroom", getPropertyBedrooms()),
    },
    {
      icon: <BiBath size={iconSize} style={iconStyles()} />,
      text: `${getPropertyBathrooms()}`,
      name: pluralize("Bathroom", getPropertyBathrooms()),
    },
    {
      icon: <MdOutlineMeetingRoom size={iconSize} style={iconStyles()} />,
      text: `${getPropertyRooms()}`,
      name: pluralize("Room", getPropertyRooms()),
    },
    {
      icon: <GiHomeGarage size={iconSize} style={iconStyles()} />,
      text: `${getPropertyGarages()}`,
      name: pluralize("Garage", getPropertyGarages()),
    },
    {
      icon: <MdOutlinePool size={iconSize} style={iconStyles()} />,
      text: `${getPropertyPool()}`,
      name: "Pool",
    },
    {
      icon: <AiOutlineCalendar size={iconSize} style={iconStyles()} />,
      text: `${getPropertyYearBuilt()}`,
      name: "Year built",
    },
    {
      icon: <AiOutlineBuild size={iconSize} style={iconStyles()} />,
      text: `${getPropertyStories()}`,
      name: pluralize("Story", getPropertyStories()),
    },
    {
      icon: <BsHouse size={iconSize} style={iconStyles()} />,
      text: `${getPropertyType()}`,
      name: "Type",
    },
    {
      icon: <RxDashboard size={iconSize} style={iconStyles()} />,
      text: `${getpropertySize()} sqft`,
      name: "Size",
    },
  ];
  const postPropertyPhoto = () => {
    if (property?.photos[0]?.href) return property.photos[0].href;
    else return "";
  };
  const postPropertyLocationCity = () => {
    if (property.location.address?.city) return property.location.address.city;
    else return "---";
  };
  const postCountry = () => {
    if (property?.location?.address?.country) {
      return property.location.address.country;
    } else {
      return "---";
    }
  };
  const handlePost = (e) => {
    e.stopPropagation();
    setIsLoading(true);
    console.log(property);
    if (accessToken) {
      const propertyData = {
        Property_id: stringToNumber(property.property_id),
        Status: getPropertyStatus(),
        City: postPropertyLocationCity(),
        Country: postCountry(),
        Name: getPropertyName(),
        Price: postPropertyPrice(),
        Photo: postPropertyPhoto(),
        Bedrooms: getPropertyBedrooms(),
        Bathrooms: getPropertyBathrooms(),
        Size: getpropertySize(),
      };
      postResource(
        "property",
        propertyData,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse,
        setPostedItem
      );
    } else navigate("/login");
  };
  const getPropertyStreetViewPhoto = () => {
    if (property?.location?.street_view_url) {
      return property.location.street_view_url;
    } else return nullPropertyImage;
  };
  useEffect(() => {
    if (postResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [postResponse, notificationBarRef]);
  return (
    <styled.container>
      <styled.row2>
        <styled.overviewWrapper>
          <styled.row>
            <styled.name>{getPropertyName()}</styled.name>
            <styled.price>Price: {getPropertyPrice()}</styled.price>
          </styled.row>
          <styled.status>{getPropertyStatus()}</styled.status>
          <styled.grid>
            {features.map((feature, index) => (
              <styled.amennity key={index}>
                {feature.icon}
                <styled.amennityName>
                  <span className="name">{`${feature.name}: `}</span>
                  {feature.text}
                </styled.amennityName>
              </styled.amennity>
            ))}
          </styled.grid>
          {type !== "sold" && (
            <Button
              buttonText={isLoading ? <Spinner /> : "Add to watchlist"}
              type={"click"}
              color={"normal"}
              size={screenSize > 600 ? "medium" : "small"}
              onClickFunc={handlePost}
            />
          )}
        </styled.overviewWrapper>
        <styled.imageContainer>
          <styled.imageTitle>Street view:</styled.imageTitle>
          <styled.image src={getPropertyStreetViewPhoto()} alt="street_view" />
        </styled.imageContainer>
      </styled.row2>
      <styled.description>{property?.description?.text}</styled.description>
      {postResponse.message && (
        <NotificationBar
          message={postResponse.message}
          type={postResponse.type}
          ref={notificationBarRef}
        />
      )}
    </styled.container>
  );
};

export default Overview;
