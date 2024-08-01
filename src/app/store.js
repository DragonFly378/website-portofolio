import { configureStore } from "@reduxjs/toolkit";
import shotReducer from "../features/shots/getShots";

export const store = configureStore({
  reducer: {
    shot: shotReducer,
  },
});
