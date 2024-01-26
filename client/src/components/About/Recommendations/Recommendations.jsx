import React from "react";
import { Link } from "react-router-dom";
import styles from "./recommendations.module.scss";

export function Recommendations() {
  return (
    <section className={styles.recommendations}>
      <div className={styles.recommendations__content}>
        <p className={styles.text}>
          If you have any suggestions or suggestions to improve the quality of
          the goods, feel free to write to us.
        </p>
        <Link to={"/contact"} className={styles.link}>Contact us</Link>
      </div>
    </section>
  );
}
