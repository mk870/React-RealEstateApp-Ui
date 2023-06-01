import { backendUrl } from "Utils/utils";
import axios from "axios";

export const postResource = (
  url,
  data,
  accessToken,
  setIsLoading,
  setPostResponse,
  postResponse,
  setPostedItem
) => {
  axios
    .post(backendUrl + url, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      setIsLoading(false)
      setPostResponse({
        ...postResponse,
        message: res.data,
        type: "success",
      });
      setPostedItem(data)
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setPostResponse({
          ...postResponse,
          message: e.response?.data?.error,
          type: "failed",
        });
      }
      if (JSON.stringify(e).message === "Network Error") {
        setPostResponse({
          ...postResponse,
          message: "your internet connection is poor",
          type: "failed",
        });
      }
      setIsLoading(false);
    });
};

export const loginRequest = (
  data,
  setIsLoading,
  setPostResponse,
  setAccessToken,
  postResponse
) => {
  axios
    .post(backendUrl + "login", data)
    .then((res) => {
      setAccessToken(res.data.accessToken);
      setIsLoading(false);
      setPostResponse({
        ...postResponse,
        message: "login successful",
        type: "success",
      });
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setPostResponse({
          ...postResponse,
          message: e.response?.data?.error,
          type: "failed",
        });
      }
      if (JSON.stringify(e).message === "Network Error") {
        setPostResponse({
          ...postResponse,
          message: "your internet connection is poor",
          type: "failed",
        });
      }
      setIsLoading(false);
    });
};
export const signupRequest = (
  data,
  setIsLoading,
  setPostResponse,
  postResponse
) => {
  axios
    .post(backendUrl + "user", data)
    .then((res) => {
      setIsLoading(false);
      setPostResponse({
        ...postResponse,
        message: res.data,
        type: "success",
      });
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setPostResponse({
          ...postResponse,
          message: e.response?.data?.error,
          type: "failed",
        });
      }
      if (JSON.stringify(e).message === "Network Error") {
        setPostResponse({
          ...postResponse,
          message: "your internet connection is poor",
          type: "failed",
        });
      }
      setIsLoading(false);
    });
};