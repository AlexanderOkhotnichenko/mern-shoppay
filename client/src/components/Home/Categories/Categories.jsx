import React from 'react'
import { Link } from 'react-router-dom';
import { data } from './data';
import styles from "./categories.module.scss";

export function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.categories__content}>
        <div className={styles.grid_layout}>
          {
            data.map((category, index) => (
              <div className={styles.col} key={index}>
                <img src={category.img.src} alt={category.img.alt} />
                <Link to={category.link} className={styles.link}>{category.title}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
