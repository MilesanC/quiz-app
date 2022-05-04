import { useContext, useRef, useState } from "react";
import InputContext from "../../store/input-context";

import classes from "./AmountInput.module.css";

const AmountInput = () => {
  const [error, setError] = useState(false);
  const amount = useRef();
  const inputCtx = useContext(InputContext);

  const inputAmountChange = () => {
    if (amount.current.value < 0) {
      amount.current.value = 0;
      setError(true);
    } else if (amount.current.value >= 11) {
      amount.current.value = 10;
      setError(true);
    } else {
      setError(false);
    }
    inputCtx.amountChange(amount.current.value);
  };

  return (
    <div className={classes.container}>
      <label htmlFor="amount">Number of Questions</label>
      <p className={`${classes.info} ${error ? classes.red : ""}`}>
        (between 1 and 10)
      </p>
      <input
        type="number"
        id="amount"
        ref={amount}
        onChange={inputAmountChange}
      />
    </div>
  );
};

export default AmountInput;
