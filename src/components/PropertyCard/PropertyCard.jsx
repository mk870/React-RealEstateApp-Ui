import React, { useContext, useEffect, useRef, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BiBed, BiBath } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import millify from "millify";
import { useDispatch, useSelector } from "react-redux";

import * as styled from "components/PropertyCard/PropertyCardStyles";
import emptyPoster from "Assets/nullPropertyPoster.jpg";
import { shortenString } from "Utils/utils";
import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import { AppContext } from "Context/AppContext";
import { postResource } from "HttpServices/Post/postData";
import { deleteResource } from "HttpServices/Delete/deleteResource";
import NotificationBar from "components/Notifications/NotificationBar";
import Spinner from "components/Spinner/Spinner";
import { addPropertyCoordinates } from "Redux/Slices/PropertyCoordinatesSlice";

const PropertyCard = ({ property, type, isFromLocalServer }) => {
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
  const dispatch = useDispatch();
  const screenSize = useSelector((state) => state.screenSize.value);
  const navigate = useNavigate();
  const emptyPropertyName = "Property name unavailable";
  const getPropertyPhoto = () => {
    if (isFromLocalServer) {
      if (!property.Photo) return emptyPoster;
      else return property.Photo;
    } else {
      if (!property.primary_photo?.href) return emptyPoster;
      else return property.primary_photo.href;
    }
  };
  const getPropertyId = () => {
    if (isFromLocalServer) return property.Property_id;
    else return property.property_id;
  };
  const getPropertyStatus = () => {
    if (isFromLocalServer) return property.Status;
    else return property.status;
  };
  const getPropertyType = () => {
    if (getPropertyStatus() === "for_sale") return "Forsale";
    else return "Rental";
  };
  const getPropertyName = (name) => {
    if (isFromLocalServer) {
      if (!property.Name) return emptyPropertyName;
      else return shortenString(property.Name, 35);
    } else {
      if (!name) return emptyPropertyName;
      else {
        if (type === "rental") {
          return name.replace("_", " ");
        } else return shortenString(name, 35);
      }
    }
  };
  const getPropertyPrice = () => {
    if (isFromLocalServer) return property.Price;
    else {
      if (type === "rental") {
        if (property?.list_price_max) return property.list_price_max;
        else return "---";
      } else {
        if (property?.list_price) return millify(property.list_price);
        else return "---";
      }
    }
  };
  const getPropertyLocationCity = () => {
    if (isFromLocalServer) return property.City;
    else return property.location.address.city;
  };
  const getPropertyLocationCounty = (county) => {
    if (isFromLocalServer) return property.County;
    else {
      if (!county) return "not available";
      else return county;
    }
  };
  const getPropertyLocationCountry = () => {
    if (isFromLocalServer) return property.Country;
    else return property.location.address.country;
  };
  const postPropertyPhoto = () => {
    if (!property.primary_photo?.href) return null;
    else return property.primary_photo.href;
  };
  const postPropertyPrice = () => {
    if (type === "rental") {
      if (property?.list_price_max) return property.list_price_max;
      else return "---";
    } else {
      if (property?.list_price) return millify(property.list_price);
      else return "---";
    }
  };
  const postPropertyCounty = () => {
    if (property.location?.county?.name) return property.location.county.name;
    else return "not available";
  };
  const getBathrooms = () => {
    if (isFromLocalServer) return property.Bathrooms;
    else {
      if (type === "rental") {
        if (property.description.baths_max)
          return property.description?.baths_max;
        else return "--";
      } else {
        if (property.description?.baths) return property.description.baths;
        else return "--";
      }
    }
  };
  const getBedrooms = () => {
    if (isFromLocalServer) return property.Bedrooms;
    else {
      if (type === "rental") {
        if (property.description?.beds_max) return property.description.beds_max;
        else return "--";
      } else {
        if (property.description?.beds) return property.description.beds;
        else return "--";
      }
    }
  };
  const getSize = () => {
    if (isFromLocalServer) return property.Size;
    else {
      if (type === "rental") {
        if (property.description?.sqft_max) return property.description.sqft_max;
        else return "--";
      } else {
        if (property.description?.sqft) return property.description.sqft;
        else return "--";
      }
    }
  };
  const postPropertySize = () => {
    if (type === "rental") {
      if (property.description?.sqft_max) return property.description.sqft_max;
      else return "--";
    } else {
      if (property.description?.sqft) return property.description.sqft;
      else return "--";
    }
  };
  const postPropertyBedrooms = () => {
    if (type === "rental") {
      if (property.description?.beds_max) return property.description.beds_max;
      else return "--";
    } else {
      if (property.description?.beds) return property.description.beds;
      else return "--";
    }
  };
  const postPropertyBathrooms = () => {
    if (type === "rental") {
      if (property.description?.baths_max) return property.description.baths_max;
      else return "--";
    } else {
      if (property.description?.baths) return property.description.baths;
      else return "--";
    }
  };
  const postPropertyName = (name) => {
    if (!name) return emptyPropertyName;
    else {
      if (type === "rental") {
        return name.replace("_", " ");
      } else return name;
    }
  };
  const propertyAmmenitiesIconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
    };
  };
  const handlePost = (property, e) => {
    e.stopPropagation();
    setIsLoading(true);
    console.log(property);
    if (accessToken) {
      let data = {
        Name: postPropertyName(
          type === "rental"
            ? property?.description?.type
            : property?.branding[0]?.name
        ),
        Price: postPropertyPrice(),
        Photo: postPropertyPhoto(),
        City: property.location.address.city,
        Country: property.location.address.country,
        County: postPropertyCounty(),
        Property_id: property.property_id,
        Status: property.status,
        Size: postPropertySize(),
        Bedrooms: postPropertyBedrooms(),
        Bathrooms: postPropertyBathrooms(),
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
  const navigateToProperyDetails = () => {
    dispatch(addPropertyCoordinates(property.location?.address?.coordinate));
    navigate(`/property/${getPropertyId()}`);
  };
  useEffect(() => {
    if (postResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [postResponse, notificationBarRef]);
  useEffect(() => {
    if (deleteResponse && notificationBarRef.current) {
      notificationBarRef.current.showPopup();
    }
  }, [notificationBarRef, deleteResponse]);
  return (
    <styled.container onClick={navigateToProperyDetails}>
      <styled.propertyType>
        <styled.propertyTypeText>{getPropertyType()}</styled.propertyTypeText>
      </styled.propertyType>
      <styled.poster src={getPropertyPhoto()} />
      <styled.row>
        <styled.name>
          {getPropertyName(
            type === "rental"
              ? property.description?.type
              : property?.branding[0]?.name
          )}
        </styled.name>
        {type === "rental" && (
          <styled.rent>
            ${getPropertyPrice()}
            <span className="span">/month</span>
          </styled.rent>
        )}
        {type === "forsale" && <styled.rent>${getPropertyPrice()}</styled.rent>}
      </styled.row>
      <styled.locationContainer>
        <IoLocationOutline
          color={secondaryThemeColor}
          size={screenSize > 420 ? 20 : 15}
        />
        <styled.text>
          {getPropertyLocationCity()},
          {getPropertyLocationCounty(property.location?.county?.name)},
          {getPropertyLocationCountry()}
        </styled.text>
      </styled.locationContainer>
      <styled.row2>
        <styled.amennities>
          <BiBed
            size={15}
            color={mainThemeColor}
            style={propertyAmmenitiesIconStyles()}
          />
          <styled.amennitiesText>
            {getBedrooms()} Bedrooms
          </styled.amennitiesText>
        </styled.amennities>
        <styled.amennities>
          <BiBath
            size={15}
            color={mainThemeColor}
            style={propertyAmmenitiesIconStyles()}
          />
          <styled.amennitiesText>
            {getBathrooms()} Bathrooms
          </styled.amennitiesText>
        </styled.amennities>
        <styled.amennities>
          <RxDashboard
            size={15}
            color={mainThemeColor}
            style={propertyAmmenitiesIconStyles()}
          />
          <styled.amennitiesText>{getSize()} sqft</styled.amennitiesText>
        </styled.amennities>
        {!isFromLocalServer ? (
          <styled.addLink onClick={(e) => handlePost(property, e)}>
            {isLoading ? (
              <Spinner />
            ) : (
              <AiOutlinePlus
                color="aliceblue"
                size={screenSize > 520 ? 17 : 14}
              />
            )}
          </styled.addLink>
        ) : (
          <styled.deleteLink onClick={(e) => handleDelete(e, property.id)}>
            {isLoading ? <Spinner /> : "Delete"}
          </styled.deleteLink>
        )}
      </styled.row2>
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

export default PropertyCard;
