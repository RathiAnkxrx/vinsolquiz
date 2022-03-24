import { createSlice } from "@reduxjs/toolkit";

const RangeChoice = createSlice({
  name: "choose your range",
  initialState: { range1: [10, 20, 30, 40], range2: [10, 20, 30, 40] },
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
  },
});

export const { chooseRange } = RangeChoice.actions;
export default RangeChoice.reducer;
