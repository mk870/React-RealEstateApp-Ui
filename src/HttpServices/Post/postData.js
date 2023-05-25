export const postResource = (
  url,
  data,
  accessToken,
  setIsLoading,
  setPostResponse,
  postResponse
) => {
  console.log("posted", data, accessToken,url);
  setTimeout(() => {
    setIsLoading(false);
    setPostResponse({
      ...postResponse,
      message: "data successufully created",
      type: "failed",
    });
  }, 4000);
};
