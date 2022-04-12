import { useContext } from "react";

import InputContext from "../../../store/input-context";
import Question from "./Question";

const QuestionList = () => {
  const inputCtx = useContext(InputContext);

  if (inputCtx.questions.length <= 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Question question={inputCtx.questions} />
      </div>
    );
  }
};

export default QuestionList;
