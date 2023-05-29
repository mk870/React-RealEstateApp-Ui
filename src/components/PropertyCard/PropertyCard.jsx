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
import { numberToString, shortenString, stringToNumber } from "Utils/utils";
import { mainThemeColor, secondaryThemeColor } from "Css/Variables";
import { AppContext } from "Context/AppContext";
import { postResource } from "HttpServices/Post/postData";
import { deleteResource } from "HttpServices/Delete/deleteResource";
import NotificationBar from "components/Notifications/NotificationBar";
import Spinner from "components/Spinner/Spinner";
import { addPropertyCoordinates } from "Redux/Slices/Property/PropertyCoordinatesSlice";

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
  const { accessToken, setDeletedItemId, setPostedItem } =
    useContext(AppContext);
  const dispatch = useDispatch();
  const screenSize = useSelector((state) => state.screenSize.value);
  const navigate = useNavigate();
  const emptyPropertyName = "Property name unavailable";
  const getPropertyPhoto = () => {
    if (isFromLocalServer) {
      if (!property.photo) return emptyPoster;
      else return property.photo;
    } else {
      if (!property.primary_photo?.href) return emptyPoster;
      else return property.primary_photo.href;
    }
  };
  const getPropertyId = () => {
    if (isFromLocalServer) return property.property_id;
    else return property.property_id;
  };
  const getPropertyStatus = () => {
    if (isFromLocalServer) return property.status;
    else return property.status;
  };
  const getPropertyType = () => {
    if (getPropertyStatus() === "for_sale") return "Forsale";
    if (getPropertyStatus() === "off_market") return "Offmarket";
    if (getPropertyStatus() === "sold") return "Sold";
    else return "Rental";
  };
  const getPropertyName = () => {
    if (isFromLocalServer) {
      if (!property.name) return emptyPropertyName;
      else return shortenString(property.name, 35);
    } else {
      if (type !== "forsale") {
        if (property?.description?.type)
          return property.description.type.replace("_", " ");
        else return emptyPropertyName;
      } else {
        if (property?.branding[0]?.name)
          return shortenString(property.branding[0].name, 35);
        else return emptyPropertyName;
      }
    }
  };
  const getPropertyPrice = () => {
    if (isFromLocalServer) return property.price;
    else {
      if (type === "rental") {
        if (property?.list_price_max) return property.list_price_max;
        else return "---";
      } else if (type === "rental recommendations") {
        if (property?.list_price) return `${property.list_price}`;
        else return "---";
      } else if (type === "sold") {
        if (property?.description?.sold_price) {
          return millify(property.description.sold_price);
        } else return "---";
      } else {
        if (property?.list_price) return millify(property.list_price);
        else return "---";
      }
    }
  };
  const getPropertyLocationCity = () => {
    if (isFromLocalServer) return property.city;
    else {
      if (property.location.address?.city)
        return property.location.address.city;
      else return "---";
    }
  };
  const getPropertyLocationCounty = (county) => {
    if (isFromLocalServer) return property.county;
    else {
      if (!county) return "---";
      else return county;
    }
  };
  const getPropertyLocationCountry = () => {
    if (isFromLocalServer) return property.country;
    else {
      if (property?.location?.address?.country) {
        return property.location.address.country;
      } else return "---";
    }
  };
  const postPropertyPhoto = () => {
    if (!property.primary_photo?.href) return "";
    else return property.primary_photo.href;
  };
  const postPropertyPrice = () => {
    if (type === "rental") {
      if (property?.list_price_max)
        return numberToString(property.list_price_max);
      else return "---";
    } else if (type === "sold") {
      if (property?.description?.sold_price) {
        return millify(property.description.sold_price);
      } else return "---";
    } else {
      if (property?.list_price) return millify(property.list_price);
      else return "---";
    }
  };
  const postPropertyCounty = () => {
    if (property.location?.county?.name) return property.location.county.name;
    else return "---";
  };
  const postPropertyLocationCity = () => {
    if (property.location.address?.city) return property.location.address.city;
    else return "---";
  };
  const getBathrooms = () => {
    if (isFromLocalServer) return property.bathrooms;
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
    if (isFromLocalServer) return property.bedrooms;
    else {
      if (type === "rental") {
        if (property.description?.beds_max)
          return property.description.beds_max;
        else return "--";
      } else {
        if (property.description?.beds) return property.description.beds;
        else return "--";
      }
    }
  };
  const getSize = () => {
    if (isFromLocalServer) return property.size;
    else {
      if (type === "rental") {
        if (property.description?.sqft_max)
          return property.description.sqft_max;
        else return "--";
      } else {
        if (property.description?.sqft) return property.description.sqft;
        else return "--";
      }
    }
  };
  const postPropertySize = () => {
    if (type === "rental") {
      if (property.description?.sqft_max)
        return numberToString(property.description.sqft_max);
      else return "--";
    } else {
      if (property.description?.sqft)
        return numberToString(property.description.sqft);
      else return "--";
    }
  };
  const postPropertyBedrooms = () => {
    if (type === "rental") {
      if (property.description?.beds_max)
        return numberToString(property.description.beds_max);
      else return "--";
    } else {
      if (property.description?.beds)
        return numberToString(property.description.beds);
      else return "--";
    }
  };
  const postPropertyBathrooms = () => {
    if (type === "rental") {
      if (property.description?.baths_max)
        return numberToString(property.description.baths_max);
      else return "--";
    } else {
      if (property.description?.baths)
        return numberToString(property.description.baths);
      else return "--";
    }
  };
  const postPropertyName = () => {
    if (type !== "for sale") {
      if (property?.description?.type)
        return property.description.type.replace("_", " ");
      else return emptyPropertyName;
    } else {
      if (property?.branding[0]?.name) return property.branding[0].name;
      else return emptyPropertyName;
    }
  };
  const propertyAmmenitiesIconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
    };
  };
  const postCountry = () => {
    if (property?.location?.address?.country) {
      return property.location.address.country;
    } else {
      return "---";
    }
  };
  const handlePost = (property, e) => {
    e.stopPropagation();
    setIsLoading(true);
    if (accessToken) {
      let data = {
        Name: postPropertyName(),
        Price: postPropertyPrice(),
        Photo: postPropertyPhoto(),
        City: postPropertyLocationCity(),
        Country: postCountry(),
        County: postPropertyCounty(),
        Property_id: stringToNumber(property.property_id),
        Status: property.status ? property.status : "---",
        Size: postPropertySize(),
        Bedrooms: postPropertyBedrooms(),
        Bathrooms: postPropertyBathrooms(),
      };
      postResource(
        "property",
        data,
        accessToken,
        setIsLoading,
        setPostResponse,
        postResponse,
        setPostedItem
      );
    } else navigate("/login");
  };
  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (accessToken) {
      setIsLoading(true);
      deleteResource(
        "property",
        id,
        accessToken,
        setIsLoading,
        setDeleteResponse,
        deleteResponse,
        setDeletedItemId
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
        <styled.name>{getPropertyName()}</styled.name>
        {type === "rental" || type === "rental recommendations" ? (
          <styled.rent>
            ${getPropertyPrice()}
            <span className="span">/month</span>
          </styled.rent>
        ) : (
          <styled.rent>${getPropertyPrice()}</styled.rent>
        )}
      </styled.row>
      <styled.locationContainer>
        <IoLocationOutline
          color={secondaryThemeColor}
          size={screenSize > 420 ? 20 : 15}
        />
        <styled.text>
          {`${getPropertyLocationCity()},`}{" "}
          {`${getPropertyLocationCounty(property.location?.county?.name)},`}{" "}
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
        {type !== "sold" && (
          <>
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
          </>
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
