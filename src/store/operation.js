import { createSlice } from "@reduxjs/toolkit";

const OperationChoice = createSlice({
  name: "choose your range",
  initialState: {
    operation1: ["Add", "Subtraction", "Multiply", "Divide"],
    operation2: ["Add", "Subtraction", "Multiply", "Divide"],
  },
  reducers: {
    chooseOperation(state, actions) {
      const { type } = actions.payload;
      const { value } = actions.payload;
      switch (type) {
        case "operation1":
          state.operation1 = state.operation1.filter(
            (operation) => operation == value
          );
          break;
        case "operation2":
          state.operation2 = state.operation2.filter(
            (operation) => operation == value
          );
      }
    },
  },
});

export const { chooseOperation } = OperationChoice.actions;
export default OperationChoice.reducer;
