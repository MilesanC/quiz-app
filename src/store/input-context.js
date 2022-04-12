import React, { useState } from "react";

const InputContext = React.createContext({
  amountInput: 1,
  categoryInput: "",
  difficultyInput: "",
  setup: true,
  questions: [],
  amountChange: (amount) => {},
  categoryChange: (category) => {},
  difficultyChange: (difficulty) => {},
  setupShow: () => {},
});

export const InputContextProvider = (props) => {
  const [amount, setAmount] = useState(1);
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
  const [setup, setSetup] = useState(true);
  const [questions, setQuestions] = useState([]);

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

  const context = {
    amountInput: amount,
    categoryInput: category,
    difficultyInput: difficulty,
    setup: setup,
    questions: questions,
    amountChange: amountChangeHandler,
    categoryChange: categoryChangeHandler,
    difficultyChange: difficultyChangeHandler,
    setupShow: setupShowHandler,
    questionsArr: setQuestionsHandler,
  };

  return (
    <InputContext.Provider value={context}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContext;
