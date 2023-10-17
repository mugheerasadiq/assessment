import { Logo } from "../../Logo";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <Logo />
    </div>
  );
};
