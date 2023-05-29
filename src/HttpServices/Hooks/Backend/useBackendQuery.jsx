/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import { useNavigate } from "react-router";
import { backendUrl } from "Utils/utils";

const useBackendQuery = ({ url }) => {
  const {accessToken, deletedItemId, setAccessToken} = useContext(AppContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(backendUrl + url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((data) => {
        setIsLoading(false);
        setData(data.data);
      })
      .catch((e) => {
        setIsLoading(false);
        if(e.message === "Request failed with status code 403"|| e.message === "token has expired") {
          setAccessToken(null)
          navigate("/login")
        }
        else setError(e.message)
      });
  }, [accessToken, navigate, url, deletedItemId]);
  return { data, isLoading, error };
};

export default useBackendQuery;
