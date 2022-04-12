import Button from "../ui/Button";
import Card from "../ui/Card";
import AmountInput from "./AmountInput";
import CategoryInput from "./CategoryInput";
import DifficultyInput from "./DifficultyInput";
import classes from "./SetupQuiz.module.css";

const SetupQuiz = (props) => {
  return (
    <Card>
      <form className={classes.container}>
        <h1>Setup Quiz</h1>
        <AmountInput />
        <CategoryInput />
        <DifficultyInput />
        <Button type="submit" onClick={props.onSubmit}>
          Start
        </Button>
      </form>
    </Card>
  );
};

export default SetupQuiz;
