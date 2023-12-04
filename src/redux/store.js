"use client";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/redux/reducer";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
});

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
