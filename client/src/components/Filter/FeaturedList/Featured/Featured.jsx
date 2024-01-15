import React from "react";
import { Link } from "react-router-dom";
import styles from "./featured.module.scss";

export function Featured({ _id, img, title, price, link, currency }) {
  return (
    <div className={styles.featured} id={_id}>
      <div className={styles.featured__row}>
        <img src={img?.src?.front} alt={img?.alt?.front} className={styles.featured__image} />
        <img src={img?.src?.back} alt={img?.alt?.back} className={styles.featured__image} />
      </div>
      <div className={styles.featured__row}>
        <h4 className={styles.featured__title}>{title}</h4>
        <div className={styles.featured__sale}>
          <span className={styles.featured__sale__old_price}><s>{currency}{price?.old}</s></span>
          <span className={styles.featured__sale__new_price}>{currency}{price?.new}</span>
        </div>
      </div>
      <Link to={link?.href} className={styles.featured__link}>{link?.text}</Link>
    </div>
  );
}
