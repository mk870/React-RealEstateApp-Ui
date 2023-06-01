import { realtorKey } from "Utils/utils";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const useFetchForRentProperties = ({
  city,
  stateCode,
  priceMin,
  priceMax,
  propertyType,
  homeSizeMin,
  homeSizeMax,
  catsOk,
  dogsOk,
  sortBy,
  bedroomsMin,
  bedroomsMax,
  bathroomsMin,
  bathroomsMax,
  inUnitFeatures,
  communityAmmenities,
}) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://us-real-estate.p.rapidapi.com/for-rent",
      params: {
        city,
        state_code: stateCode,
        limit: "180",
        offset: "0",
        sort: sortBy,
        price_min: priceMin,
        price_max: priceMax,
        beds_min: bedroomsMin,
        beds_max: bedroomsMax,
        baths_min: bathroomsMin,
        baths_max: bathroomsMax,
        property_type: propertyType,
        expand_search_radius: "25",
        home_size_min: homeSizeMin,
        home_size_max: homeSizeMax,
        in_unit_features: inUnitFeatures,
        community_ammenities: communityAmmenities,
        cats_ok: catsOk,
        dogs_ok: dogsOk,
      },
      headers: {
        "X-RapidAPI-Key": realtorKey,
        "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
      },
    }),
    [
      bathroomsMax,
      bathroomsMin,
      bedroomsMax,
      bedroomsMin,
      catsOk,
      city,
      communityAmmenities,
      dogsOk,
      homeSizeMax,
      homeSizeMin,
      inUnitFeatures,
      priceMax,
      priceMin,
      propertyType,
      sortBy,
      stateCode,
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
  }, [city, options, stateCode]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  }, [error]);
  return { data, isLoading, error };
};

export default useFetchForRentProperties;
