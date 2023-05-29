import { createSlice } from "@reduxjs/toolkit";

export const propertiesToBuySlice = createSlice({
  name: "propertiesToBuy",
  initialState: {
    value: null,
  },
  reducers: {
    addBuyProperties: (state, action) => {
      state.value = {
        ...state.value,
        id: action.payload,
      };
    },
  },
});
export const { addBuyProperties} =
  propertiesToBuySlice.actions;
export default propertiesToBuySlice.reducer;