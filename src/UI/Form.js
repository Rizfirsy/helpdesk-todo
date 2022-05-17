import Button from "../Component/Button";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles.header}>Login</h1>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" />
      </div>
      <Button type="primary" text="Submit" />
    </form>
  );
};

export default Form;
