import { createSlice } from "@reduxjs/toolkit";

const QuestionBank = createSlice({
  name: "quiz questions",
  initialState: { quiz1: [], quiz2: [], score1: 0, score2: 0 },
  reducers: {
    addQuestion(state, actions) {
      const { rangeArr } = actions.payload;
      const { operatorArr } = actions.payload;
      const { section } = actions.payload;
      const number1 = Math.floor(Math.random() * rangeArr[0] + 1);
      const number2 = Math.floor(Math.random() * rangeArr[0] + 1);
      let correctAnswer;
      let operator;
      let symbol;
      if (operatorArr.length > 1) {
        const random = Math.floor(Math.random() * 4);
        operator = operatorArr[random];
      } else {
        operator = operatorArr[0];
      }
      switch (operator) {
        case "Add":
          correctAnswer = number1 + number2;
          symbol = "+";
          break;
        case "Subtraction":
          correctAnswer = number1 - number2;
          symbol = "-";
          break;
        case "Multiply":
          correctAnswer = number1 * number2;
          symbol = "*";
          break;
        case "Divide":
          correctAnswer = (number1 / number2).toFixed(1);
          symbol = "/";
          break;
      }
      const data = { operator, number1, number2, correctAnswer, symbol };
      section == "1"
        ? state.quiz1.push({ ...data })
        : state.quiz2.push({ ...data });
    },

    inputAnswer(state, actions) {
      const { answer } = actions.payload;
      const { section } = actions.payload;
      const { currentQus } = actions.payload;

      section == "1"
        ? (state.quiz1 = state.quiz1.map((item, index) =>
            index === currentQus
              ? {
                  ...item,
                  inputAnswer: +answer,
                  isCorrect: +answer === item.correctAnswer ? true : false,
                }
              : item
          ))
        : (state.quiz2 = state.quiz2.map((item, index) =>
            index === currentQus
              ? {
                  ...item,
                  inputAnswer: answer,
                  isCorrect: +answer === item.correctAnswer ? true : false,
                }
              : item
          ));
    },

    calculateScroe(state, actions) {
      const section = actions.payload;
      let count = 0;

      section == "1"
        ? state.quiz1.forEach((element) => {
            if (element.isCorrect) count++;
          })
        : state.quiz2.forEach((element) => {
            if (element.isCorrect) count++;
          });
      section == "1" ? (state.score1 = count) : (state.score2 = count);
    },

    resetQuestion(state, actions) {
      const section = actions.payload;
      section === "1" ? (state.quiz1 = []) : (state.quiz2 = []);
      section === "1" ? (state.score1 = 0) : (state.score2 = 0);
    },
  },
});

export const { addQuestion, inputAnswer, calculateScroe, resetQuestion } =
  QuestionBank.actions;
export default QuestionBank.reducer;
