/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { AppContext } from "../../../Context/AppContext";
import { backendUrl } from "Utils/utils";
import { addUserProfile } from "Redux/Slices/User/userProfile";

const useQueryUserProfile = () => {
  const { accessToken, updatedItem, setAccessToken } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if(accessToken){
      setError(null);
    axios
      .get(backendUrl + "user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((data) => {
        setIsLoading(false);
        dispatch(addUserProfile(data.data));
      })
      .catch((e) => {
        setIsLoading(false);
        if(e.message === "Request failed with status code 403"|| e.message === "token has expired") {
          setAccessToken(null)
          navigate("/login")
        }
        else setError(e.message);
      });
    } else{
      setIsLoading(false)
    }
  }, [accessToken, navigate, updatedItem]);
  return { isLoading, error };
};

export default useQueryUserProfile;
