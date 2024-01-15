import React from 'react'
import styles from "./extendedinformation.module.scss";

export function ExtendedInformation({ options }) {

  return (
    <section className={styles.extended_information}>
      <div className={styles.extended_information__content}>
        <h1 className={styles.title}>{options.title}</h1>
        <p className={styles.text}>{options.text[0]}</p>
        <p className={styles.text}>{options.text[1]}</p>
      </div>
    </section>
  )
}
