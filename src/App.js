import { useState, useContext, useEffect } from "react";

import SetupQuiz from "./components/setup/SetupQuiz";
import classes from "./App.module.css";
import InputContext from "./store/input-context";
import QuestionList from "./components/setup/quiz/QuestionList";

function App() {
  const [inputQuiz, setInputQuiz] = useState({});
  // const [questions, setQuestions] = useState([]);

  const inputCtx = useContext(InputContext);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${inputQuiz.amount}&category=${inputQuiz.category}&difficulty=${inputQuiz.difficulty}&type=multiple`
    )
      .then((respon) => {
        return respon.json();
      })
      .then((data) => {
        inputCtx.questionsArr(data.results);
      });
  }, [inputQuiz]);

  const submitQuizInput = (event) => {
    event.preventDefault();
    const input = {
      amount: inputCtx.amountInput,
      category: inputCtx.categoryInput,
      difficulty: inputCtx.difficultyInput,
    };
    setInputQuiz(input);
    inputCtx.setupShow();
  };

  return (
    <div className={classes.quiz}>
      {inputCtx.setup && <SetupQuiz onSubmit={submitQuizInput} />}
      {!inputCtx.setup && <QuestionList />}
    </div>
  );
}

export default App;
