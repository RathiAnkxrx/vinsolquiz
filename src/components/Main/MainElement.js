import styled from "styled-components";
import { COLOR } from "../../constant";

export const CumulativeScore = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 4.8rem;
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.skyBlue};
`;
export const MainContainer = styled.section`
  max-width: 100vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
`;

export const Quiz = styled.div`
  max-width: 100%;
  height: 100%;
`;

export const QuizContainer = styled.div`
  max-width: 100%;
  height: calc(100vh - 8.6rem);
  padding: 6.2rem 4.8rem;
  position: relative;
  background: ${COLOR.grayBackground};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const QuizSpan = styled.span`
  font-size: 2.4rem;
  color: ${COLOR.cherry};
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-right: 1rem;
`;
export const Question = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${COLOR.navyBlue};
  display: flex;
  align-items: center;
`;

export const QuestionContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const StartButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 700;
  width: 25rem;
  height: 5.2rem;
  border-radius: 50px;
  background: linear-gradient(
    to bottom,
    ${COLOR.greenLight},
    ${COLOR.greenDark}
  );
  color: #fff;
  cursor: pointer;
  border: none;
`;

export const ChoiceContainer = styled.div`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 45%));
  justify-content: space-between;
  row-gap: 4.8rem;
`;

export const ChoiceButton = styled.button`
  padding: 1.8rem 2.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.2rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(
    to bottom,
    ${COLOR.indigoLight},
    ${COLOR.indigoDarker}
  );
  color: #fff;
  font-size: 1.8rem;
  letter-spacing: 1px;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`;

export const AnswerInput = styled.input`
  margin: 3.2rem 0;
  width: 30rem;
  height: 4.2rem;
  border-radius: 0.8rem;
  padding: 0 2.4rem;
  border: none;
  font-size: 1.8rem;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const NextButton = styled.button`
  width: 20rem;
  height: 4.8rem;
  background: linear-gradient(to bottom, ${COLOR.cherry}, ${COLOR.cherryDark});
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 700;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`;

export const QuizHeading = styled.h2`
  color: ${COLOR.navyDark};
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  margin-top: 3.4rem;
`;

export const Answer = styled.div`
  width: 100%;
  padding: 1rem 2.4rem;
  border-radius: 0.8rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const AnswerHeading = styled.p`
  font-size: 1.4rem;
  color: ${COLOR.navyDark};
  font-weight: 700;
`;
export const AnswerDesc = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 1fr 1fr;
  gap: 1.2rem;
  width: 100%;
`;

export const SubContext = styled.p`
  font-size: 1.2rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4.8rem 0;
`;
export const ScoreContainer = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;
export const Score = styled.p`
  font-size: 3.2rem;
  font-size: 700;
  color: ${COLOR.cherry};
  margin-left: 1.8rem;
`;

export const RulesHeading = styled.p`
  color: ${COLOR.cherry};
  font-size: 2.4rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 2.4rem;
`;
export const QuizRule = styled.p`
  font-size: 1.8rem;
`;

export const Timmer = styled.div`
  display: flex;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Time = styled.p`
  margin-left: 2.4rem;
  color: ${(props) =>
    props.timeLeft >= 10 ? COLOR.greenDark : COLOR.cherryDark};
`;

export const ResetButton = styled.button`
  width: 12rem;
  height: 4.8rem;
  background: linear-gradient(to bottom, ${COLOR.cherry}, ${COLOR.cherryDark});
`;
