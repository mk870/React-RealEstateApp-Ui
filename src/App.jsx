/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { AppContext } from "./Context/AppContext";
import { Globalstyles } from "./GlobalStyles/GlobalStyles";
import RoutesList from "./Routes/RoutesList";
import { useLocaleStorage } from "./HttpServices/Hooks/useLocalStorage";
import Layout from "./Layout/Layout";
import useDecodeUser from "HttpServices/Hooks/useDecodeUser";

function App() {
  const [accessToken, setAccessToken] = useLocaleStorage(
    null,
    "propertyPlusToken"
  );
  const [searchLocation, setSearchLocation] = useState({
    city: "",
    stateCode: "",
  });
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [postedItem, setPostedItem] = useState(null);
  const [updatedItem, setUpdatedItem] = useState(null);
  useDecodeUser({ accessToken });
  const appRoutes = RoutesList(accessToken);
  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        searchLocation,
        setSearchLocation,
        deletedItemId,
        setDeletedItemId,
        postedItem,
        setPostedItem,
        updatedItem,
        setUpdatedItem,
      }}
    >
      <BrowserRouter>
        <Globalstyles />
        <Layout>
          <Routes>
            {appRoutes.routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
