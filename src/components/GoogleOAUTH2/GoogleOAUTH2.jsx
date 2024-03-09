import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { GoogleLogin} from "@react-oauth/google";
import axios from "axios";

import * as styled from "./GoogleOAUTH2Styles";
import { backendUrl } from "Utils/utils";
import HttpError from "HttpServices/Error/HttpError";
import { AppContext } from "Context/AppContext";

const GoogleOAUTH2 = ({ type }) => {
  const [authError, setAuthError] = useState(null);
  const {setAccessToken} = useContext(AppContext)
  const url =
    type === "login"
      ? `${backendUrl}google-login`
      : `${backendUrl}google-signup`;
  const handleAuth = (res) => {
    axios
      .post(url, {
        credential: res.credential,
        clientId: res.clientId,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken)
      })
      .catch((e) => {
        if (JSON.stringify(e).message === "Network Error") {
          setAuthError("your internet connection is poor");
        } else setAuthError("Something went wrong");
      });
  };
  useEffect(() => {
    if (authError) {
      setTimeout(() => setAuthError(null), 3000);
    }
  }, [authError]);
  return (
    <>
      {authError ? (
        <HttpError message={authError} size={"large"} />
      ) : (
        <styled.Container>
          
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleAuth(credentialResponse);
              }}
              onError={(e) => {
                setAuthError(e.message);
              }}
              text={type==="login"?"signin_with":"signup_with"}
            />
          
        </styled.Container>
      )}
    </>
  );
};

export default GoogleOAUTH2;
