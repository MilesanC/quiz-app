import { useContext, useRef } from "react";

import InputContext from "../../store/input-context";
import classes from "./CategoryInput.module.css";

const CategoryInput = () => {
  const category = useRef();

  const inputCtx = useContext(InputContext);

  const inputCategoryChange = () => {
    inputCtx.categoryChange(category.current.value);
  };

  return (
    <div className={classes.container}>
      <label htmlFor="category">Category</label>
      <select
        name="category"
        id="category"
        onChange={inputCategoryChange}
        ref={category}
      >
        <option value="9">General Knowledge</option>
        <option value="10">Books</option>
        <option value="11">Film</option>
        <option value="12">Music</option>
        <option value="14">Television</option>
        <option value="18">Computers</option>
        <option value="20">Mythology</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="25">Art</option>
      </select>
    </div>
  );
};

export default CategoryInput;
