import { configureStore } from "@reduxjs/toolkit";

import { screenSizeSlice } from "./Slices/ScreenSizeSlice";
import { userSlice } from "./Slices/UserSlice";
import { propertiesForRentSlice } from "./Slices/PropertiesForRentSlice";
import { propertiesToBuySlice } from "./Slices/PropertiesToBuySlice";
import { propertyCoordinatesSlice } from "./Slices/PropertyCoordinatesSlice";
import { notificationsSlice } from "./Slices/NotificationsSlice";

export const reduxStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    screenSize: screenSizeSlice.reducer,
    propertiesToRent: propertiesForRentSlice.reducer,
    propertiesToBuy: propertiesToBuySlice.reducer,
    propertyCoordinates: propertyCoordinatesSlice.reducer,
    notifications: notificationsSlice.reducer,
  },
});
