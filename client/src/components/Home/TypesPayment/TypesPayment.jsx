import React from "react";
import paypal from "../../../assets/img/paypal.webp";
import mastercard from "../../../assets/img/mastercard.webp";
import visa from "../../../assets/img/visa.webp";
import googlepay from "../../../assets/img/googlepay.webp";
import applepay from "../../../assets/img/applepay.webp";
import styles from "./typespayment.module.scss";

export function TypesPayment() {
  return (
    <section className={styles.types_payment}>
      <div className={styles.types_payment__content}>
        <h1 className={styles.title}>Pay by any convenient way for you!</h1>
        <div className={styles.types}>
          <div className={styles.col}>
            <img src={paypal} alt="PayPal" />
          </div>
          <div className={styles.col}>
            <img src={mastercard} alt="MasterCard" />
          </div>
          <div className={styles.col}>
            <img src={visa} alt="Visa" />
          </div>
          <div className={styles.col}>
              <img src={googlepay} alt="Google Pay" />
          </div>
          <div className={styles.col}>
              <img src={applepay} alt="Apple Pay" />
          </div>
        </div>
      </div>
    </section>
  );
}
