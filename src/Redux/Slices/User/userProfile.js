import { createSlice } from "@reduxjs/toolkit";

const user = {
  City: "",
  Country: "",
  State: "",
  StreetName: "",
  StreetNumber: "",
  FirstName: "",
  LastName: "",
  Bio: "",
  Phone: "",
  DateOfBirth: "",
  Photo: "",
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    value: user,
  },
  reducers: {
    addUserProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
