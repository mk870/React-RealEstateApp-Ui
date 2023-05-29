import { createSlice } from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    value: [],
  },
  reducers: {
    addNotifications: (state, action) => {
      state.value = action.payload
    },
  },
});
export const { addNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
