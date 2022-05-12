import { useSelector } from "react-redux";
import Quiz from "../Quiz";
import { CumulativeScore, MainContainer } from "./MainElement";

const Main = () => {
  const { score1 } = useSelector((state) => state.questionBank);
  const { score2 } = useSelector((state) => state.questionBank);
  let cumulativeScore = score1 + score2;
  return (
    <>
      <CumulativeScore>
        Cumulative Scorebord : {cumulativeScore}{" "}
      </CumulativeScore>
      <MainContainer>
        <Quiz section="1" />
        <Quiz section="2" />
      </MainContainer>
    </>
  );
};

export default Main;
