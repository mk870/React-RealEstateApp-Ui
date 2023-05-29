import { backendUrl } from "Utils/utils";
import axios from "axios";

export const updateResource = (
  url,
  data,
  accessToken,
  setIsLoading,
  setUpdateResponse,
  updateResponse,
  setUpdatedItem
) => {
  axios
    .put(backendUrl + url, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      setIsLoading(false);
      setUpdateResponse({
        ...updateResponse,
        message: res.data,
        type: "success",
      });
      setUpdatedItem(data)
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setUpdateResponse({
          ...updateResponse,
          message: e.response?.data?.error,
          type: "failed",
        });
      }
      if (JSON.stringify(e).message === "Network Error") {
        setUpdateResponse({
          ...updateResponse,
          message: "your internet connection is poor",
          type: "failed",
        });
      }
      setIsLoading(false);
    });
};
