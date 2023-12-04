import { combineReducers } from "@reduxjs/toolkit";
import testSlice from "@/redux/reducers/testReducer";

export const rootReducer = combineReducers({
  test: testSlice,
  //add all your reducers here
});
