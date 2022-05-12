import { createSlice } from "@reduxjs/toolkit";

const initialState = { range1: [10, 20, 30, 40], range2: [10, 20, 30, 40] };
const RangeChoice = createSlice({
  name: "choose your range",
  initialState: initialState,
  reducers: {
    chooseRange(state, actions) {
      const { type } = actions.payload;
      const { value } = actions.payload;
      switch (type) {
        case "range1":
          state.range1 = state.range1.filter((range) => range == value);
          break;
        case "range2":
          state.range2 = state.range2.filter((range) => range == value);
      }
    },
    resetRange(state, actions) {
      const section = actions.payload;
      console.log(initialState.range1);
      section === "1"
        ? (state.range1 = initialState.range1)
        : (state.range2 = initialState.range2);
    },
  },
});

export const { chooseRange, resetRange } = RangeChoice.actions;
export default RangeChoice.reducer;
