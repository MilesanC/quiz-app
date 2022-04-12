import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Congrats from "./Congrats";

import classes from "./Question.module.css";

const Question = (props) => {
  const [score, setScore] = useState(0);
  const [indexQuestion, setIndexQuestion] = useState(0);

  let questions;
  let randomAnswers;

  questions = props.question;

  if (indexQuestion === questions.length) {
    return <Congrats score={score} numberQuestions={indexQuestion} />;
  }

  const random = () => {
    const answers = [
      questions[indexQuestion].correct_answer,
      ...questions[indexQuestion].incorrect_answers,
    ].sort(() => Math.random() - 0.5);
    randomAnswers = answers;
  };

  random();

  const nextQuestionHandler = () => {
    setIndexQuestion((prevState) => (prevState = prevState + 1));
  };

  const answerHandler = (answer) => {
    setIndexQuestion((prevState) => (prevState = prevState + 1));
    if (questions[indexQuestion].correct_answer === answer) {
      setScore((prevState) => (prevState = prevState + 1));
    }
    random();
  };

  return (
    <Card className={classes.container}>
      <p>Correct Answers: {`${score}/${indexQuestion}`}</p>
      <div className={classes.question}>
        <h1
          dangerouslySetInnerHTML={{
            __html: questions[indexQuestion].question,
          }}
        />
        <Button
          onClick={() => answerHandler(randomAnswers[0])}
          className={classes.answer}
          dangerouslySetInnerHTML={{
            __html: randomAnswers[0],
          }}
        />
        <Button
          onClick={() => answerHandler(randomAnswers[1])}
          className={classes.answer}
          dangerouslySetInnerHTML={{
            __html: randomAnswers[1],
          }}
        />
        <Button
          onClick={() => answerHandler(randomAnswers[2])}
          className={classes.answer}
          dangerouslySetInnerHTML={{
            __html: randomAnswers[2],
          }}
        />
        <Button
          onClick={() => answerHandler(randomAnswers[3])}
          className={classes.answer}
          dangerouslySetInnerHTML={{
            __html: randomAnswers[3],
          }}
        />
      </div>
      <Button className={classes.next} onClick={nextQuestionHandler}>
        Next Question
      </Button>
    </Card>
  );
};

export default Question;
