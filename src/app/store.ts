import { configureStore } from "@reduxjs/toolkit";
import stationsReducer from "./slices/stations";
import streamReducer from "./slices/stream";

export const store = configureStore({
  reducer: { stationsReducer, streamReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
