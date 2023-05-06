import { createSlice } from "@reduxjs/toolkit";

const notificationsList = [
  {
    Type: "Property",
    Action: "Post",
    Description: "added property tmx to your rentals watchlist",
    Date: "2023-04-23",
    Viewed: false,
  },
  {
    Type: "Agent",
    Action: "post",
    Description: "added agent Angie to your agents watchlist",
    Date: "2023-04-23",
    Viewed: false,
  },
  {
    Type: "Agent",
    Action: "delete",
    Description: "deleted agent with id 455555555",
    Date: "2023-04-23",
    Viewed: false,
  },
  {
    Type: "Property",
    Action: "delete",
    Description: "deleted property with id 33333333",
    Date: "2023-04-23",
    Viewed: false,
  },
];
export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    value: notificationsList,
  },
  reducers: {
    addNotifications: (state, action) => {
      state.value = {
        ...state.value,
        id: action.payload,
      };
    },
  },
});
export const { addNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
