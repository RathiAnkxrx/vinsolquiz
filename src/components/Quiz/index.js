import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import {
  Question,
  Quiz,
  QuizContainer,
  QuizSpan,
  ChoiceButton,
  StartButton,
  AnswerInput,
  NextButton,
  QuizHeading,
  ChoiceContainer,
  QuestionContainer,
  AnswerContainer,
  Answer,
  AnswerDesc,
  AnswerHeading,
  SubContext,
  Score,
  ScoreContainer,
} from "../Main/MainElement";
import { chooseRange } from "../../store/rangeChoice";
import { useDispatch, useSelector } from "react-redux";
import { chooseOperation } from "../../store/operation";
import { addQuestion, calculateScroe } from "../../store/questions";
import { inputAnswer } from "../../store/questions";

const QuizComp = ({ section }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [start, setStart] = useState(false);
  const [range, setRange] = useState(false);
  const [finalStart, setFinalStart] = useState(false);
  const [operation, setOperation] = useState(false);
  const [current, setCurrent] = useState(0);
  const operationAll = ["Add", "Subtraction", "Multiply", "Divide"];

  const { range1 } = useSelector((state) => state.range);
  const { range2 } = useSelector((state) => state.range);
  const rangeArr = section === "1" ? range1 : range2;

  const { operation1 } = useSelector((state) => state.operation);
  const { operation2 } = useSelector((state) => state.operation);
  const { quiz1 } = useSelector((state) => state.questionBank);
  const { quiz2 } = useSelector((state) => state.questionBank);
  const quizArr = section == "1" ? quiz1 : quiz2;

  const { score1 } = useSelector((state) => state.questionBank);
  const { score2 } = useSelector((state) => state.questionBank);
  const score = section == "1" ? score1 : score2;

  const handleRangeChoice = (e) => {
    const { value } = e.target;
    setRange((state) => !state);
    dispatch(chooseRange({ type: `range${section}`, value }));
  };

  const handleoperationChoice = (e) => {
    const { value } = e.target;
    setOperation((state) => !state);
    if (value === "all") {
      return;
    } else {
      dispatch(chooseOperation({ type: `operation${section}`, value }));
    }
  };

  // genreate random question
  const makeQuestions = () => {
    const operatorArr = section == "1" ? operation1 : operation2;

    console.log(operation1, operatorArr, operation2, "inside");
    for (let i = 0; i < 20; i++) {
      dispatch(addQuestion({ rangeArr, operatorArr, section }));
    }
  };

  const handleNext = () => {
    const answer = inputRef.current.value;
    dispatch(inputAnswer({ answer, section, current }));
    setCurrent((state) => state + 1);
    inputRef.current.value = "";
    dispatch(calculateScroe(section));
  };

  const handleFinalStart = () => {
    setFinalStart((state) => !state);
    makeQuestions();
  };

  return (
    <Quiz>
      {/* startingheading */}
      <Header section={section} />

      <QuizContainer>
        {/* Start Quiz */}
        {!start && !range && !operation && (
          <StartButton onClick={() => setStart((start) => !start)}>
            Start Quiz
          </StartButton>
        )}

        {/* Select range for pratice */}
        {start && !range && !operation && (
          <>
            <QuizHeading>
              Select on which range you want to practice
            </QuizHeading>
            <ChoiceContainer>
              {rangeArr.map((range, index) => {
                return (
                  <ChoiceButton
                    onClick={(e) => handleRangeChoice(e)}
                    key={index}
                    value={range}
                  >
                    0-{range}
                  </ChoiceButton>
                );
              })}
            </ChoiceContainer>
          </>
        )}

        {/* select operation if you want */}
        {start && range && !operation && (
          <>
            <QuizHeading>
              Want to select particular operation for practice ?
            </QuizHeading>
            <ChoiceContainer>
              {/* Loop over all choice */}
              {operationAll.map((operation, index) => {
                return (
                  <ChoiceButton
                    onClick={(e) => handleoperationChoice(e)}
                    key={index}
                    value={operation}
                  >
                    {operation}
                  </ChoiceButton>
                );
              })}

              {/* Select all Choice */}
              <ChoiceButton
                onClick={(e) => handleoperationChoice(e)}
                value="all"
              >
                All
              </ChoiceButton>
            </ChoiceContainer>
          </>
        )}
        {/* final start */}
        {start && range && operation && !finalStart && (
          <StartButton onClick={handleFinalStart}>
            Let's start finally..
          </StartButton>
        )}

        {/* Quiz questions */}
        {start && range && operation && finalStart && current <= 19 && (
          <QuestionContainer>
            <QuizSpan>
              {current < 9 ? `0${current + 1}` : `${current + 1}`}{" "}
            </QuizSpan>
            <Question>
              {quizArr[current].operator} these two numbers (
              {quizArr[current].number1} {quizArr[current].symbol}{" "}
              {quizArr[current].number2}) and write your answer
              {quizArr[current].operator == "Divide"
                ? "round your answer with 1 decimal place"
                : ""}
            </Question>
            <AnswerInput ref={inputRef} />
            <NextButton onClick={handleNext}>
              {current === 19 ? "Finish" : "Next"}
            </NextButton>
          </QuestionContainer>
        )}

        {/* Your total score */}
        {start && range && finalStart && operation && (
          <ScoreContainer>
            <QuizHeading>Your Score</QuizHeading>
            <Score>{score ? score : 0}/20</Score>
          </ScoreContainer>
        )}

        {/* Show answers */}
        {current > 19 && (
          <>
            <QuizHeading>Your Result</QuizHeading>
            <AnswerContainer>
              {quizArr.map((item, index) => {
                return (
                  <Answer key={index}>
                    <AnswerDesc>
                      <AnswerHeading>Question</AnswerHeading>
                      <AnswerHeading>Correct Ans</AnswerHeading>
                      <AnswerHeading>Your Ans</AnswerHeading>
                    </AnswerDesc>
                    <AnswerDesc>
                      <SubContext
                        style={{
                          color: item.isCorrect ? "#4aa02c" : "#ff5a5f",
                        }}
                      >
                        {item.operator} these two numbers ({item.number1},
                        {item.number2})
                      </SubContext>
                      <SubContext
                        style={{
                          color: item.isCorrect ? "#4aa02c" : "#ff5a5f",
                        }}
                      >
                        {item.correctAnswer}
                      </SubContext>
                      <SubContext
                        style={{
                          color: item.isCorrect ? "#4aa02c" : "#ff5a5f",
                        }}
                      >
                        {item.inputAnswer}
                      </SubContext>
                    </AnswerDesc>
                  </Answer>
                );
              })}
            </AnswerContainer>
          </>
        )}
      </QuizContainer>
    </Quiz>
  );
};

export default QuizComp;
