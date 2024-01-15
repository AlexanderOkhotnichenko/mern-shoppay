import React from 'react'
import { Link } from "react-router-dom";
import styles from "./product.module.scss";

export function Product({ _id, img, title, price, link }) {
  return (
    <div className={styles.product} id={_id}>
      <div className={styles.product__row}>
        <img src={img?.src?.front} alt={img?.alt?.front} className={styles.product__image} />
        <img src={img?.src?.back} alt={img?.alt?.back} className={styles.product__image} />
      </div>
      <div className={styles.product__row}>
        <h4 className={styles.product__title}>{title}</h4>
        <div className={styles.product__sale}>
          {price?.old ? <span className={styles.product__sale__old_price}><s>${price?.old}</s></span> : ''}
          <span className={styles.product__sale__new_price}>${price?.new}</span>
        </div>
      </div>
      <Link to={link?.href} className={styles.product__link}>{link?.text}</Link>
    </div>
  )
}
