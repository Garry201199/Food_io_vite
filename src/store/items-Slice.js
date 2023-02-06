import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setAllItems: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setAllItems } = itemsSlice.actions;
export const Items = (state) => state.item.value;
export default itemsSlice;
