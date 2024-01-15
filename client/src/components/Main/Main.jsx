import React from "react";
import styles from "./main.module.scss";

export function Main({ ...props }) {
  return <main {...props} className={styles.main}></main>;
}
