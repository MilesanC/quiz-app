import React, { useState } from "react";

const InputContext = React.createContext({
  amountInput: 1,
  categoryInput: "",
  difficultyInput: "",
  setup: true,
  questions: [],
  error: false,
  amountChange: (amount) => {},
  categoryChange: (category) => {},
  difficultyChange: (difficulty) => {},
  setupShow: () => {},
  setError: () => {},
});

export const InputContextProvider = (props) => {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
  const [setup, setSetup] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);

  const amountChangeHandler = (amount) => {
    setAmount(amount);
  };

  const categoryChangeHandler = (category) => {
    setCategory(category);
  };

  const difficultyChangeHandler = (difficulty) => {
    setDifficulty(difficulty);
  };

  const setupShowHandler = () => {
    setSetup((prevState) => (prevState = !prevState));
  };

  const setQuestionsHandler = (questionsData) => {
    setQuestions(questionsData);
  };

  const setErrorHandler = () => {
    setError((prevState) => (prevState = !prevState));
  };

  const context = {
    amountInput: amount,
    categoryInput: category,
    difficultyInput: difficulty,
    setup: setup,
    questions: questions,
    error: error,
    amountChange: amountChangeHandler,
    categoryChange: categoryChangeHandler,
    difficultyChange: difficultyChangeHandler,
    setupShow: setupShowHandler,
    questionsArr: setQuestionsHandler,
    setError: setErrorHandler,
  };

  return (
    <InputContext.Provider value={context}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContext;
