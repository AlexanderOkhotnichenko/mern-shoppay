import React from "react";
import { Link } from "react-router-dom";
import styles from "./recommendations.module.scss";

export function Recommendations() {
  return (
    <section className={styles.recommendations}>
      <div className={styles.recommendations__content}>
        <h2 className={styles.title}>
          If you have any suggestions or suggestions to improve the quality of
          the goods, feel free to write to us.
        </h2>
        <Link to={"/contact"} className={styles.link}>Contact us</Link>
      </div>
    </section>
  );
}
