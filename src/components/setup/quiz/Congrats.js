import { useContext } from "react";

import InputContext from "../../../store/input-context";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import classes from "./Congrats.module.css";

const Congrats = (props) => {
  const inputCtx = useContext(InputContext);

  const playAgainHandler = () => {
    inputCtx.setupShow();
    inputCtx.questionsArr([]);
    inputCtx.amountChange(1);
    inputCtx.categoryChange("9");
    inputCtx.difficultyChange("easy");
  };
  return (
    <Card className={classes.card}>
      <h1>Congratulations!</h1>
      <p>{`You answered ${props.score} correct questions out of ${props.numberQuestions}`}</p>
      <Button onClick={playAgainHandler}>Play again!</Button>
    </Card>
  );
};

export default Congrats;
