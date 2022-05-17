import styles from "./Button.module.css";

const Button = (props) => {
  const buttonType = props.type;
  let buttonStyle = buttonType === "primary" ? "buttonPrimary" : "buttonSecondary";

  const buttonHandler = (e) => {
    e.preventDefault();
  };

  return (
    <button
      className={`${styles["button"]} ${styles[buttonStyle]}`}
      onClick={buttonHandler}
    >
      {props.text}
    </button>
  );
};

export default Button;
