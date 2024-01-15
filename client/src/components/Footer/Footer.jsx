import React from "react";
import { Icon } from "../Icon";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.payment}>
          <div className={styles.payment__card}>
            <Icon id={"googlepay"} />
          </div>
          <div className={styles.payment__card}>
            <Icon id={"applepay"} />
          </div>
          <div className={styles.payment__card}>
            <Icon id={"paypal"} />
          </div>
          <div className={styles.payment__card}>
            <Icon id={"mastercard"} />
          </div>
          <div className={styles.payment__card}>
            <Icon id={"visa"} />
          </div>
        </div>
      </div>
    </footer>
  );
}
