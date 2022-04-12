import { useContext, useRef } from "react";
import InputContext from "../../store/input-context";

import classes from "./AmountInput.module.css";

const AmountInput = () => {
  const amount = useRef();
  const inputCtx = useContext(InputContext);

  const inputAmountChange = () => {
    inputCtx.amountChange(amount.current.value);
  };

  return (
    <div className={classes.container}>
      <label htmlFor="amount">Number of Questions</label>
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
