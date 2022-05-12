import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  operation1: ["Add", "Subtraction", "Multiply", "Divide"],
  operation2: ["Add", "Subtraction", "Multiply", "Divide"],
};
const OperationChoice = createSlice({
  name: "choose your range",
  initialState: initialState,
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
    resetOperation(state, actions) {
      const section = actions.payload;
      section === "1"
        ? (state.operation1 = initialState.operation1)
        : (state.operation2 = initialState.operation2);
    },
  },
});

export const { chooseOperation, resetOperation } = OperationChoice.actions;
export default OperationChoice.reducer;
