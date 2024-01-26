import React from 'react'
import { Link } from "react-router-dom";
import styles from "./product.module.scss";

export function Product({ _id, img, title, price, link }) {
  return (
    <div className={styles.product} id={_id}>
      <div className={styles.row}>
        <img src={img?.src?.front} alt={img?.alt?.front} className={styles.image} />
        <img src={img?.src?.back} alt={img?.alt?.back} className={styles.image} />
      </div>
      <div className={styles.row}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.sale}>
          {price?.old ? <span className={styles.sale_old_price}><s>${price?.old}</s></span> : ''}
          <span className={styles.sale_new_price}>${price?.new}</span>
        </div>
      </div>
      <Link to={link?.href} className={styles.link}>{link?.text}</Link>
    </div>
  )
}
