import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

function Button({ link, children }) {
  return (
    <>
      <Link className={styles.btn} href={`/events/${link}`}>
        {children}
      </Link>
    </>
  );
}

export default Button;
