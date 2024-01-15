import React from "react";
import { Link } from "react-router-dom";
import styles from "./total.module.scss";

export function Total({ total, onClick }) {
  return (
    <section className={styles.total}>
      <div className={styles.row}>
        <h2 className={styles.title}>Total</h2>
        <span className={styles.price}>${total}</span>
      </div>
      <button className={styles.checkout} onClick={onClick}>Proceed to order</button>
    </section>
  );
}
