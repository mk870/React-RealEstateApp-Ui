import { createSlice } from "@reduxjs/toolkit";

export const propertiesForRentSlice = createSlice({
  name: "propertiesToRent",
  initialState: {
    value: null,
  },
  reducers: {
    addRentProperties: (state, action) => {
      state.value = {
        ...state.value,
        id: action.payload,
      };
    },
  },
});
export const { addRentProperties} =
  propertiesForRentSlice.actions;
export default propertiesForRentSlice.reducer;
