import { realtorKey } from "Utils/utils";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const useFetchAgent = ({ advertiserId }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://us-real-estate.p.rapidapi.com/agents/agent-profile",
      params: { advertiser_id: advertiserId },
      headers: {
        "X-RapidAPI-Key": realtorKey,
        "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
      },
    }),
    [advertiserId]
  );
  useEffect(() => {
    axios
      .request(options)
      .then((data) => {
        setData(data.data.data);
        console.log(data.data.data);
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

export default useFetchAgent;
