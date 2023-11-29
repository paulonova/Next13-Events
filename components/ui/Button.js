import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link className={styles.btn} href={`${link}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
