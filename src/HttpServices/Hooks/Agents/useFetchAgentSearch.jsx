import { realtorKey } from "Utils/utils";
import axios from "axios";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

const useFetchAgentSearch = ({
  stateCode,
  city,
  sortby,
  priceMax,
  priceMin,
  agentName,
}) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://us-real-estate.p.rapidapi.com/agents/agents-search",
      params: {
        state_code: stateCode,
        city,
        sort: sortby,
        limit: 80,
        price_min: priceMin,
        price_max: priceMax,
        agent_name: agentName,
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": realtorKey,
        "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
      },
    }),
    [agentName, city, priceMax, priceMin, sortby, stateCode]
  );
  useEffect(() => {
    setError(null);
    setIsLoading(true);
    axios
      .request(options)
      .then((data) => {
        setData(data.data.data.agents);
        console.log(data.data.data.agents);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
        setIsLoading(false);
      });
  }, [options]);
  return { data, isLoading, error };
};

export default useFetchAgentSearch;
