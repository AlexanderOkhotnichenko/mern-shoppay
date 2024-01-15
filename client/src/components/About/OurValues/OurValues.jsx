import React from "react";
import styles from "./ourvalues.module.scss";

export function OurValues() {
  return (
    <section className={styles.our_values}>
      <div className={styles.our_values__content}>
        <h1 className={styles.title}>Our Values</h1>
        <div className={styles.row}>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Connection</h3>
            <p className={styles.item__text}>
              We connect with the best producers in the world, those with
              generational knowledge and those who also share our values of
              accountability, transparency and sustainability. We stay in the
              region, we break bread, we laugh and share stories, we get to know
              the culture and community, and most importantly, we work closely
              to make better shoes, for People and the Planet.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Community</h3>
            <p className={styles.item__text}>
              Our commitment centers around ensuring that the People and the
              Planet are considered at every stage of our value chain. We have
              aligned ourselves with the United Nations Sustainable Development
              Goals to make sure we are always at the forefront of addressing
              important issues like Ocean Pollution, Climate Change and Economic
              Inequalities.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Good Design</h3>
            <p className={styles.item__text}>
              We believe in good design as a way of reducing waste. We focus on
              what matters: material make-up, design simplicity, sustainability,
              quality, comfort and functional integrity. We create versatile
              shoes that you actually want to wear, on-or-off the trail year
              round.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
