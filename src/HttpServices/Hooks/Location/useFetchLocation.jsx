import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { realtorKey } from "Utils/utils";

const useFetchLocation = ({ inputQuery }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://us-real-estate.p.rapidapi.com/location/suggest",
      params: { input: inputQuery },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": realtorKey,
        "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
      },
    }),
    [inputQuery]
  );
  useEffect(() => {
    if (inputQuery.length > 2) {
      let CancelToken = axios.CancelToken;
      let source = CancelToken.source();
      axios
        .get(options.url, {
          params: { input: inputQuery },
          headers: options.headers,
          cancelToken: source.token,
        })
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
    }
  }, [options, inputQuery]);
  return { data, isLoading, error };
};

export default useFetchLocation;
