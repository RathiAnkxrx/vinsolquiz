import { configureStore } from "@reduxjs/toolkit";
import rangeChoiceReducer from "./rangeChoice";
import operationChoiceRecuder from "./operation";
import questionBankReducer from "./questions";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (error) {
    console.log(error);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("presistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
const store = configureStore({
  reducer: {
    range: rangeChoiceReducer,
    operation: operationChoiceRecuder,
    questionBank: questionBankReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
