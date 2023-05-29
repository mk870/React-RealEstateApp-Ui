import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    value: null,
  },
  reducers: {
    addUserProfile: (state, action) => {
      state.value = action.payload
    },
  },
});
export const { addUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
