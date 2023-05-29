import { configureStore } from "@reduxjs/toolkit";

import { screenSizeSlice } from "./Slices/ScreenSizeSlice";
import { userSlice } from "./Slices/User/UserSlice";
import { propertiesForRentSlice } from "./Slices/Property/PropertiesForRentSlice";
import { propertiesToBuySlice } from "./Slices/Property/PropertiesToBuySlice";
import { propertyCoordinatesSlice } from "./Slices/Property/PropertyCoordinatesSlice";
import { notificationsSlice } from "./Slices/Notifications/NotificationsSlice";
import { userProfileSlice } from "./Slices/User/userProfile";

export const reduxStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    screenSize: screenSizeSlice.reducer,
    propertiesToRent: propertiesForRentSlice.reducer,
    propertiesToBuy: propertiesToBuySlice.reducer,
    propertyCoordinates: propertyCoordinatesSlice.reducer,
    notifications: notificationsSlice.reducer,
    userProfile: userProfileSlice.reducer,
  },
});
