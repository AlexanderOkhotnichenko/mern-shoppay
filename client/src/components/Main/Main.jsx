import React from "react";
import styles from "./main.module.scss";

export function Main({ children, ...props }) {
  return <main {...props} className={styles.main}>{children}</main>;
}
