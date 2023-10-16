import React from "react";
import styles from "./styles.module.css";
import { SignInForm } from "./form/form";
import { Logo } from "../../components/custom/Logo";

const Signin = () => {
  return (
    <div className={styles["container"]}>
      <Logo />
      <h4 className={styles["heading"]}>Sign In</h4>
      <SignInForm />
    </div>
  );
};

export default Signin;
