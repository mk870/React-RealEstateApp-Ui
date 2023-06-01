import { realtorKey } from "Utils/utils";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const useFetchForSaleProperties = ({
  stateCode,
  city,
  sortby,
  priceMax,
  priceMin,
  bedroomsMin,
  bedroomsMax,
  bathroomsMin,
  bathroomsMax,
  propertyType,
  insideRooms,
  outsideFeatures,
  communityAmmenities,
  homeSizeMin,
  homeSizeMax,
  lotSizeMin,
  lotSizeMax,
}) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://us-real-estate.p.rapidapi.com/for-sale",
      params: {
        offset: "0",
        limit: "180",
        state_code: stateCode,
        city,
        sort: sortby,
        price_min: priceMin,
        price_max: priceMax,
        beds_min: bedroomsMin,
        beds_max: bedroomsMax,
        baths_min: bathroomsMin,
        baths_max: bathroomsMax,
        property_type: propertyType,
        inside_rooms: insideRooms,
        outside_features: outsideFeatures,
        community_ammenities: communityAmmenities,
        home_size_min: homeSizeMin,
        home_size_max: homeSizeMax,
        lot_size_min: lotSizeMin,
        lot_size_max: lotSizeMax,
      },
      headers: {
        "X-RapidAPI-Key": realtorKey,
        "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
      },
    }),
    [
      stateCode,
      city,
      sortby,
      priceMin,
      priceMax,
      bedroomsMin,
      bedroomsMax,
      bathroomsMin,
      bathroomsMax,
      propertyType,
      insideRooms,
      outsideFeatures,
      communityAmmenities,
      homeSizeMin,
      homeSizeMax,
      lotSizeMin,
      lotSizeMax,
    ]
  );
  useEffect(() => {
    if (stateCode && city) {
      setIsLoading(true);
      setError(null);
      setData(null);
      axios
        .request(options)
        .then((data) => {
          setData(data.data.data.results);
          setIsLoading(false);
        })
        .catch((e) => {
          setError(e.message);
          setIsLoading(false);
        });
    }
  }, [options, city, stateCode]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  }, [ error]);
  return { data, isLoading, error };
};

export default useFetchForSaleProperties;
