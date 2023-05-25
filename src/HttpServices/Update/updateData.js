export const updateResource = (
 url,
 data,
 accessToken,
 setIsLoading,
 setUpdateResponse,
 updateResponse
) => {
 console.log("updated", data, accessToken,url);
 setTimeout(() => {
   setIsLoading(false);
   setUpdateResponse({
     ...updateResponse,
     message: "data successufully updated",
     type: "failed",
   });
 }, 4000);
};