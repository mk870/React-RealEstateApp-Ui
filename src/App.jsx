/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContext } from "./Context/AppContext";
import { Globalstyles } from "./GlobalStyles/GlobalStyles";
import RoutesList from "./Routes/RoutesList";
import { useLocaleStorage } from "./HttpServices/Hooks/useLocalStorage";
import Layout from "./Layout/Layout";
import { useState } from "react";

function App() {
  const [accessToken, setAccessToken] = useLocaleStorage(
    null,
    "propertyPlusToken"
  );
  const [fetchNotifications, setFetchNotifications] = useState(false);
  const [searchLocation, setSearchLocation] = useState({
    city: "",
    stateCode: "",
  });
  const appRoutes = RoutesList();
  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        setFetchNotifications,
        fetchNotifications,
        searchLocation,
        setSearchLocation
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
