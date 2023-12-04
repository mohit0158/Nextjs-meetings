import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state , action) => {
      state.value += action.payload;
    }
  },
});

export const { increment } = testSlice.actions;

export default testSlice.reducer;
