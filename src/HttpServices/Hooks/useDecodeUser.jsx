import { useEffect } from "react";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import { addFirstName, addProfilePhoto } from "Redux/Slices/User/UserSlice";

const useDecodeUser = ({ accessToken }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      const userProfile = jwt_decode(accessToken);
      dispatch(addFirstName(userProfile.FirstName));
      dispatch(addProfilePhoto(userProfile.Photo));
    }
  }, [accessToken, dispatch]);
  return null;
};

export default useDecodeUser;
