import axios from "axios";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

const useFetchAgentSearch = ({ stateCode, city }) => {
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
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "4739bd97cbmsh4d6ed5faf3af021p1a0003jsn23f53f704b62",
        "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
      },
    }),
    [city, stateCode]
  );
  useEffect(() => {
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
