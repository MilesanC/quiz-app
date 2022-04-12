import { useContext, useRef } from "react";

import InputContext from "../../store/input-context";
import classes from "./DifficultyInput.module.css";

const DifficultyInput = () => {
  const category = useRef();

  const inputCtx = useContext(InputContext);

  const inputDifficultyChange = () => {
    inputCtx.difficultyChange(category.current.value);
  };

  return (
    <div className={classes.container}>
      <label htmlFor="difficulty">Difficulty</label>
      <select
        name="difficulty"
        id="difficulty"
        onChange={inputDifficultyChange}
        ref={category}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultyInput;
