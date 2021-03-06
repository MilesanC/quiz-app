import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
      dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
    >
      {props.children}
    </button>
  );
};

export default Button;
