import React from "react";
import styles from "./styles.module.css";
import { SignupForm } from "./form/form";
import { Logo } from "../../components/custom/Logo";

const Signup = () => {
  
  return (
    <div className={styles["container"]}>
      <Logo />
      <h4 className={styles["heading"]}>Sign up</h4>
      <SignupForm />
    </div>
  );
};

export default Signup;
