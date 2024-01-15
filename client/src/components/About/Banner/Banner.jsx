import React from "react";
import styles from "./banner.module.scss";
import nature from "../../../assets/img/nature_rastenie.webp";

export function Banner() {
  return (
    <section className={styles.banner}>
      <img src={nature} alt="Nature" className={styles.nature_img} />
      <div className={styles.banner__content}>
        <h1 className={styles.title}>SHOPAY OUTDOORS</h1>
        <p className={styles.text}>We believe that we can all do better by people and the planet</p>
      </div>
    </section>
  )
}
