import { useContext } from "react";

import InputContext from "../../../store/input-context";
import Question from "./Question";
import Error from "./Error";

const QuestionList = () => {
  const inputCtx = useContext(InputContext);

  if (inputCtx.questions.length <= 0) {
    return (
      <div>
        {inputCtx.error && <h1>Loading...</h1>}
        {!inputCtx.error && <Error />}
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
