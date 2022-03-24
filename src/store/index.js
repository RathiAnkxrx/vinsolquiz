import { configureStore } from "@reduxjs/toolkit";
import rangeChoiceReducer from "./rangeChoice";
import operationChoiceRecuder from "./operation";
import questionBankReducer from "./questions";
const store = configureStore({
  reducer: {
    range: rangeChoiceReducer,
    operation: operationChoiceRecuder,
    questionBank: questionBankReducer,
  },
});

export default store;
