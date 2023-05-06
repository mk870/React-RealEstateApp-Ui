import { createSlice } from "@reduxjs/toolkit";

export const propertyCoordinatesSlice = createSlice({
  name: "propertyCoordinates",
  initialState: {
    value: null,
  },
  reducers: {
    addPropertyCoordinates: (state, action) => {
      state.value = {
        ...state.value,
        id: action.payload,
      };
    },
  },
});
export const { addPropertyCoordinates } = propertyCoordinatesSlice.actions;
export default propertyCoordinatesSlice.reducer;
