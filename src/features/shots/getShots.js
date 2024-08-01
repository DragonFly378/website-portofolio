import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const getShots = createSlice({
  name: "shot",
  initialState,
  reducers: {
    swap: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { swap } = getShots.actions;
export default getShots.reducer;
