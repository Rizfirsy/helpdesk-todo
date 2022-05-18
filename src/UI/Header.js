import { NavLink } from "react-router-dom";
import Button from "../Component/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Helpdesk</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <Button
              type="secondary"
              text={<NavLink to="/Signup">Signup</NavLink>}
            ></Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
