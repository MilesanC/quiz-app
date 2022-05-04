import { useContext } from "react";

import InputContext from "../../../store/input-context";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import classes from "./Error.module.css";

const Error = () => {
  const inputCtx = useContext(InputContext);

  const playAgainHandler = () => {
    inputCtx.setupShow();
    inputCtx.questionsArr([]);
    inputCtx.amountChange(1);
    inputCtx.categoryChange("9");
    inputCtx.difficultyChange("easy");
    inputCtx.setError();
  };
  return (
    <Card className={classes.card}>
      <h1>Error !</h1>
      <p>There is an error, try again!</p>
      <Button onClick={playAgainHandler}>Try again!</Button>
    </Card>
  );
};

export default Error;
