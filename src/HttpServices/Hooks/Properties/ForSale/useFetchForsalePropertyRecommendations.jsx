import { realtorKey } from "Utils/utils";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const useFetchForesalePropertyRecommendations = ({ propertyId }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://us-real-estate.p.rapidapi.com/for-sale/similiar-homes",
      params: { property_id: propertyId },
      headers: {
        "X-RapidAPI-Key": realtorKey,
        "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
      },
    }),
    [propertyId]
  );
  useEffect(() => {
    axios
      .request(options)
      .then((data) => {
        setData(data.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, [options]);
  return { data, isLoading, error };
};

export default useFetchForesalePropertyRecommendations;
