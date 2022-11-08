import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const rootReducer = combineReducers({
  toolkit: mainSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
