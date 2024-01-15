import React from "react";
import { PayPal } from "./PayPal";
import { GooglePay } from "./GooglePay";
import styles from "./payments.module.scss";

export function Payments({ total }) {
  return (
    <section className={styles.payments}>
      <div className={styles.payments__content}>
        <PayPal total={total} />
        <GooglePay total={total} />
      </div>
    </section>
  );
}
