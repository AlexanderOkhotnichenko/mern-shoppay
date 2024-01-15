import React from 'react'
import { Link } from "react-router-dom";
import styles from "./featured.module.scss";

export function Featured({ _id, img, title, price, link, currency, onClick }) {
  return (
    <div className={styles.card} id={_id}>
      <div className={styles.img_wrapper}>
        <img src={img?.src?.front} alt={img?.alt?.front} className={styles.front} />
        <img src={img?.src?.back} alt={img?.alt?.back} className={styles.back} />
      </div>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>
          <span className={styles.old}><s>{currency}{price?.old}</s></span>
          <span className={styles.new}>{currency}{price?.new}</span>
        </div>
        <Link 
        to={link?.href}
        onClick={onClick}
         className={styles.link}>{link?.text}</Link>
      </div>
    </div>
  )
}
