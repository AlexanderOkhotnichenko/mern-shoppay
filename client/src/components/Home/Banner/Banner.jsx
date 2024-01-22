import React from "react";
import { Link } from "react-router-dom";
import banner from "/src/assets/img/banner.webp";
import styles from "./banner.module.scss";

export function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__content}>
        <div className={styles.media}>
          <img src={banner} alt={"Weekend Boot"} className={styles.media__banner} />
        </div>
        <div className={styles.description}>
            <h1 className={styles.description__title}>Our Holiday Sale Is Here</h1>
            <p className={styles.description__text}>And there's something for everyone on your list.</p>
            <Link to={"/shop"} className={styles.description__link}>Shop the Sale</Link>
        </div>
      </div>
    </section>
  )
}
