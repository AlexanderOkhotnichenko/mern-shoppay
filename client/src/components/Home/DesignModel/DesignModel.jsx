import React from "react";
import { Link } from "react-router-dom";
import nature from "/src/assets/img/nature.webp";
import styles from "./designmodel.module.scss";

export function DesignModel() {
  return (
    <section className={styles.design_model}>
      <div className={styles.design_model__content}>
        <div className={styles.background}>
          <img src={nature} alt="Nature" className={styles.img} />
        </div>
        <div className={styles.description}>
          <h1 className={styles.description__title}>Thoughtfully Designed From Natural and Recycled Materials</h1>
          <p className={styles.description__text}>Each pair diverts 1-2 kg of waste from our waterways and landfill, reduces 20kg of CO2 from the atmosphere, and conserves 10L of water when compared to your traditional leather boot.</p>
          <Link to={"/about"} className={styles.description__link}>Learn more</Link>
        </div>
      </div>
    </section>
  );
}
